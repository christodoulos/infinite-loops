import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserQuery } from '@infinite-loops/auth';

@Component({
  selector: 'infinite-loops-case-explorer',
  templateUrl: './case-explorer.component.html',
  styleUrls: ['./case-explorer.component.css'],
})
export class CaseExplorerComponent implements OnInit {
  user = this.userQuery.user;
  casesCollection = `/users/${this.user.uid}/cases`;
  filesCollection = `/users/${this.user.uid}/files`;
  constructor(private userQuery: UserQuery, private db: AngularFirestore) {}

  ngOnInit(): void {
    console.log(this.casesCollection, this.filesCollection);
    this.db
      .collection(this.casesCollection)
      .snapshotChanges()
      .subscribe((result) => {
        result.forEach(function lala(v) {
          console.log(v.payload.doc.data());
        });
      });
  }
}
