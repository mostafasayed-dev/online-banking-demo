import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'transfer-details',
  templateUrl: './transfer-details.component.html',
  styleUrls: ['./transfer-details.component.css']
})
export class TransferDetailsComponent implements OnInit {

  @Output('backClicked') backClickedEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }


  confirm(){
    
  }

  back(){
    this.backClickedEvent.emit(true);
  }
}
