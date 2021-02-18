// https://bit.ly/3u1qO62
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserQuery } from '@infinite-loops/auth';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { AlertService } from '@infinite-loops/notifications';
import { Router } from '@angular/router';

interface OptCase {
  caseID: string;
  optProg: string;
  optProgVersion: string;
  caseFiles: string;
  readInfos: boolean;
  holdIP: boolean;
}

@Component({
  selector: 'infinite-loops-upload-sap',
  templateUrl: './upload-sap.component.html',
  styleUrls: ['./upload-sap.component.scss'],
})
export class UploadSapComponent implements OnInit {
  isHovering = false;
  caseForm: FormGroup;
  files: File[] = [];
  uploads: Array<string> = [];

  user = this.userQuery.user;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userQuery: UserQuery,
    private db: AngularFirestore
  ) {
    this.caseForm = new FormGroup<OptCase>({
      caseID: new FormControl('', [Validators.required]),
      optProg: new FormControl('', [Validators.required]),
      optProgVersion: new FormControl('', [Validators.required]),
      caseFiles: new FormControl('', [Validators.required]),
      readInfos: new FormControl(false, [Validators.requiredTrue]),
      holdIP: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    this.files = Array.from(files);
  }

  receive(fileID: string) {
    this.uploads.push(fileID);
    this.caseForm.getControl('caseFiles').setValue(this.uploads.join());
    console.log(this.uploads);
  }

  submit() {
    console.log(this.caseForm.value);
    const caseID = this.caseForm.value.caseID;
    const optProg = this.caseForm.value.optProg;
    const optProgVersion = this.caseForm.value.optProgVersion;
    const caseFiles = this.caseForm.value.caseFiles;

    this.db
      .collection(`/users/${this.user.uid}/cases`)
      .add({ caseID, optProg, optProgVersion, caseFiles })
      .then((result) => {
        this.alertService.success(`Thanks for submitting you case. 
      Your case unique id is ${result.id}`);
        this.router.navigate(['']);
      });
  }
}
