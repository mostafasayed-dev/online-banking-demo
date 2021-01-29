import { Component, Input, OnInit, Output, TemplateRef, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {

  static modalRef: BsModalRef;

  @Input('message_title') message_title : string;
  @Input('button1_text') button1_text : string;
  @Input('data1') data1;
  @Input('data2') data2;
  @Output('confirmed') confirmed = new EventEmitter<Boolean>();

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    ModalInfoComponent.modalRef = this.modalService.show(template);
  }

  closeModal(){
    ModalInfoComponent.modalRef.hide();
    this.confirmed.emit(true);
    console.log(this.message_title)
    console.log(this.button1_text)
  }

}
