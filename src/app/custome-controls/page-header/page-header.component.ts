import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input('header_text') header_text : string

  constructor() { }

  ngOnInit() {
    // console.log(this.header_text)
  }

}
