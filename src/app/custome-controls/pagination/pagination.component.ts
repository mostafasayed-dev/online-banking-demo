import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {

  private totalItemsCountChangedSubscription : Subscription;

  paginationCountObj = null;// array object with length of totalItemsCount
  currentPage = 1;// curent page index
  additinalPages = 0;// additional pages like 1,2,3 || 2,3,4 || 3,4,5 => aditional pages = 2
  numberOfPages : number;
  count = 0;// number of pages

  @Input('totalItemsCountChanged') totalItemsCountChangedEvent: Observable<number>;// to be notified from parent when number of items is ready
  @Input('itemsPerPage') itemsPerPage : number;//  represent items displayed per page
  @Output('currentPageChanged') currentPageChanged = new EventEmitter()// to notify parent with current page

  constructor() { }

  ngOnInit() {
    this.totalItemsCountChangedSubscription = this.totalItemsCountChangedEvent.subscribe(
      totalItemsCount => {
        this.count = Math.ceil(totalItemsCount / this.itemsPerPage);// number of pages
        this.paginationCountObj = new Array(this.count)
      }
    )
  }

  paginationItemClicked(index){
    if(this.currentPage - index == 1){
      return;
    }

    if(index <= this.currentPage){
      this.currentPage = index + 1;
    }
    else{
      if((this.currentPage + index) - index > 1){
        this.currentPage = this.currentPage + index - ((this.currentPage + index) - index) + 1;
      }
      else{
        this.currentPage = this.currentPage + index;
      }
    }
    this.currentPageChanged.emit(this.currentPage);
  }

  setpForward(){
    if(this.currentPage == this.paginationCountObj.length){
      return;
    }
    if(this.currentPage > 2){

      if((this.paginationCountObj.length - this.additinalPages) > 3){// review this condition
        this.additinalPages +=1;
      }
    }
    this.currentPage++;
    this.currentPageChanged.emit(this.currentPage);
    console.log('currentPage', this.currentPage)
    console.log('additinalPages', this.additinalPages)
    console.log('paginationCountObj.length', this.paginationCountObj.length)
  }

  setpBackward(){
    if(this.currentPage == 1){
      return;
    }
    if(this.currentPage > 2){
      if(this.additinalPages > 0){
        this.additinalPages -=1;
      }
    }

    this.currentPage--;
    if(this.currentPage == 1 && this.additinalPages == 1){
      this.additinalPages = 0;
    }
    this.currentPageChanged.emit(this.currentPage);
  }

  ngOnDestroy() {
    this.totalItemsCountChangedSubscription.unsubscribe()
  }
}
