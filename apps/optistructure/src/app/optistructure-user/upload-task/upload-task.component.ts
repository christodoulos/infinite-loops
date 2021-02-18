import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { UserQuery } from '@infinite-loops/auth';

export interface fileDesc {
  name: string;
  size: number;
  type?: string;
  lastModified: number;
  path: string;
  url: string;
}

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css'],
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File | undefined;
  @Output() fID: EventEmitter<string> = new EventEmitter<string>();
  task!: AngularFireUploadTask;
  percentage$: Observable<number | undefined> = of(0);
  snapshot$: Observable<any> = of();
  downloadURL: string = '';

  user = this.userQuery.user;

  constructor(
    private userQuery: UserQuery,
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.startUpload();
  }

  startUpload() {
    if (this.file !== undefined) {
      const name = this.file.name;
      const size = this.file.size;
      const type = this.file.type;
      const lastModified = this.file.lastModified;

      // The storage path
      const path = `sap2000/${Date.now()}_${this.file.name}`;

      // Reference to storage bucket
      const ref = this.storage.ref(path);

      // The main task
      this.task = this.storage.upload(path, this.file);

      // Progress monitoring
      this.percentage$ = this.task.percentageChanges();

      this.snapshot$ = this.task.snapshotChanges().pipe(
        tap(console.log),
        // The file's download URL
        finalize(async () => {
          this.downloadURL = await ref.getDownloadURL().toPromise();
          const url = this.downloadURL;

          this.db
            .collection(`/users/${this.user.uid}/uploads`)
            .add({ name, size, type, lastModified, url, path })
            .then((result) => {
              this.fID.emit(result.id);
            });
        })
      );
    }
  }

  isActive(snapshot: any) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }

  dclick() {
    alert('Delete Upload: Not implemented yet!');
  }
}
