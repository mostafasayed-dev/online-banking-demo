import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css']
})
export class ModalSuccessComponent implements OnInit {

  static modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  
  openModal(template: TemplateRef<any>) {
    ModalSuccessComponent.modalRef = this.modalService.show(template);
  }

  closeModal(){
    ModalSuccessComponent.modalRef.hide()
  }
}
