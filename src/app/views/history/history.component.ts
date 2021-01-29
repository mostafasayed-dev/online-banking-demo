import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { History } from 'src/app/models/history.model';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  totalItemsCountChanged: Subject<number> = new Subject<number>();// notify pagination control with total number of items
  currentPage = 1;// curent page index
  itemsPerPage = 3;// configurable => represent items displayed per page
  historyList: History[];
  totalItemsCount: number = 0;
  isLoading = true;
  displayedColumns: string[] = ['createdAt', 
                                'transaction', 
                                'from_account', 
                                'to_account', 
                                'from_amount', 
                                'to_amount'];
  
  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.getHistory();
  }

  async getHistory(){
    this.isLoading = true;
    await this.historyService.getRimHistory(this.itemsPerPage, this.currentPage);
    if(this.historyService.historyList.length > 0){
      this.historyList = this.historyService.historyList;
      this.totalItemsCount = this.historyService.count;
      this.totalItemsCountChanged.next(this.totalItemsCount);
      this.isLoading = false;
    }
  }

  currentPageChanged(currentPage){
    this.currentPage = currentPage;
    this.getHistory();
  }
}
