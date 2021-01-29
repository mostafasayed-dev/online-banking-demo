import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  referenceNumber: string;
  isValidReferenceNumber: boolean;

  constructor(private historyService: HistoryService,
              private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.getHistoryByReferenceNumber(this.activeRouter.snapshot.paramMap.get('refNumber'));
  }

  async getHistoryByReferenceNumber(referenceNumber: string){
    await this.historyService.getHistoryByReferenceNumber(referenceNumber);
    if(this.historyService.referenceNumber && this.historyService.referenceNumber != ""){
      this.isValidReferenceNumber = true;
      this.referenceNumber = this.historyService.referenceNumber;
    }
    else{
      this.referenceNumber = "";
      this.isValidReferenceNumber = false;
    }
  }

}
