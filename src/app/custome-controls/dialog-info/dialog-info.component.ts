import { Component, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { title } from 'process';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.css']
})
export class DialogInfoComponent implements OnInit {

  titles = [];
  contents = [];

  constructor(public dialogRef: MatDialogRef<DialogInfoComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: {title: string, contentTitle : [], contentData: []}) 
  {
    this.titles = this.data.contentTitle;
    this.contents = this.data.contentData;
  }

  ngOnInit() {
  }

}
