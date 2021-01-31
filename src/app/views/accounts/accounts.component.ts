import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { AccountHistory } from 'src/app/models/account-history.model';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { HistoryService } from 'src/app/services/history.service';
import { MediaQueryService } from 'src/app/services/media-query.service';
import { Account } from '../../models/account.model'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit, OnDestroy {

  // as Subject doesn't fire the totalItemsCountChangedSubscription subject in pagination component
  // It is actually a better idea to use BehaviorSubject. 
  // This will provide the last value when it is subscribed to.
  // or ca n use setTimeout(() => this.itemSupplier$.next(this.items), 0) instead
  totalItemsCountChanged_accounts: BehaviorSubject<number> = new BehaviorSubject<number>(0);// notify pagination control with total number of items
  currentPage_accounts = 1;// curent page index
  itemsPerPage_accounts = 4;// configurable => represent items displayed per page
  totalItemsCount_accounts: number = 0;

  totalItemsCountChanged_history: BehaviorSubject<number> = new BehaviorSubject<number>(0);// notify pagination control with total number of items
  currentPage_history = 1;// curent page index
  itemsPerPage_history = 3;// configurable => represent items displayed per page
  totalItemsCount_history: number = 0;

  isLoading = false;
  isAccountHistoryAvailable = false;
  selectedAccount = "";
  rim_accounts: Account[];
  accountHistoryList: AccountHistory[];
  displayedColumns: string[] = ['account_no','account_type','account_currency','actual_balance','available_balance','details'];
  displayedColumns1: string[] = ['date', 
                                'transaction', 
                                'amount'];

  deviceWidthListener: Subscription;
  deviceWidth : number;

  constructor(private authService: AuthService, 
              private accountService: AccountService,
              private historyService: HistoryService,
              private mediaQueryService: MediaQueryService) { }

  ngOnInit() {
    // this.isLoading = true;
    // this.accountService.getRimAccounts(parseInt(this.authService.getRimNumber())).subscribe(accounts => {
    //   // console.log(accounts)
    //   this.isLoading = false;
    //   if(accounts){
    //     this.rim_accounts = accounts
    //   }else{

    //   }
    // })
    this.deviceWidth = this.mediaQueryService.getDeviceWidth();
    this.deviceWidthListener = this.mediaQueryService.getDeviceWidthListener().subscribe(
      width => {
        this.deviceWidth = width;
        console.log(width);
      }
    )
    console.log(this.deviceWidth)
    this.getRimAccounts();
  }

  async getRimAccounts(){
    this.isLoading = true;
    await this.accountService.getRimAccounts(parseInt(this.authService.getRimNumber()), this.itemsPerPage_accounts, this.currentPage_accounts);
    if(this.accountService.accountsList.length > 0){
      this.rim_accounts = this.accountService.accountsList;
      this.totalItemsCount_accounts = this.accountService.count;
      this.totalItemsCountChanged_accounts.next(this.totalItemsCount_accounts);
      this.isLoading = false;
    }
  }

  currentAccountPageChanged(currentPage){
    this.currentPage_accounts = currentPage;
    this.getRimAccounts();
  }

  getAccountDetails(account_no: string){
    this.getAcountHistory(account_no);
  }

  async getAcountHistory(account_no: string){
    this.isLoading = true;
    await this.historyService.getAccountHistory(account_no, this.itemsPerPage_history, this.currentPage_history);
    if(this.historyService.accountHistoryList.length > 0){
      this.accountHistoryList = this.historyService.accountHistoryList;
      this.totalItemsCount_history = this.historyService.count;
      this.totalItemsCountChanged_history.next(this.totalItemsCount_history);
      this.isAccountHistoryAvailable = true;
      this.selectedAccount = account_no;
      this.isLoading = false;
    }
    else{
      this.isLoading = false;
    }
  }

  currentHistoryPageChanged(currentPage){
    this.currentPage_history = currentPage;
    this.getAcountHistory(this.selectedAccount);
  }

  back(){
    this.isAccountHistoryAvailable = false;
    this.selectedAccount = "";
    this.currentAccountPageChanged(1);
  }

  ngOnDestroy(): void {
    this.deviceWidthListener.unsubscribe();
  }

}
