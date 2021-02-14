import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'infinite-loops-upload-sap',
  templateUrl: './upload-sap.component.html',
  styleUrls: ['./upload-sap.component.scss'],
})
export class UploadSapComponent implements OnInit {
  isHovering: boolean;

  files: File[] = [];
  constructor() {}

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
    console.log(files);
  }
}
