import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserQuery } from '@infinite-loops/auth';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface OptCase {
  caseID: string;
  optProg: string;
  optProgVersion: string;
  caseFiles: string;
}
export interface OptCaseId extends OptCase {
  id: string;
}

export interface Upload {
  name: string;
  type: string;
  size: number;
  lastModified: number;
  path: string;
  url: string;
}

@Component({
  selector: 'file-upload',
  template: `<ng-container *ngIf="data$ | async as data"
    ><a target="_blank" class="text-indigo-500" href="{{ data.url }}">{{
      data.name
    }}</a>
    ({{ data.size / 1024 | number: '1.2-2' }}K)</ng-container
  >`,
})
export class FileUpload implements OnInit {
  @Input() file: string | undefined;
  data$: Observable<Upload | undefined> | undefined;
  user = this.userQuery.user;

  constructor(private userQuery: UserQuery, private afs: AngularFirestore) {}

  ngOnInit() {
    this.data$ = this.afs
      .doc<Upload>(`users/${this.user.uid}/uploads/${this.file}`)
      .valueChanges();
  }
}

@Component({
  selector: 'infinite-loops-case-explorer',
  templateUrl: './case-explorer.component.html',
  styleUrls: ['./case-explorer.component.css'],
})
export class CaseExplorerComponent implements OnInit {
  // Following documentation in https://bit.ly/3autqSs
  user = this.userQuery.user;
  casesCollection = this.afs.collection(`/users/${this.user.uid}/cases`);
  filesCollection = this.afs.collection(`/users/${this.user.uid}/uploads`);
  cases$: Observable<OptCaseId[]>;
  constructor(private userQuery: UserQuery, private afs: AngularFirestore) {
    this.cases$ = this.casesCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as OptCase;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  cases(casesStr: string) {
    return casesStr.split(',');
  }

  ngOnInit(): void {}
}
