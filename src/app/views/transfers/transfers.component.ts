import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { TransferService } from 'src/app/services/transfer.service';
import { ModalSuccessComponent } from 'src/app/custome-controls/modal-success/modal-success.component';
import { ModalInfoComponent } from 'src/app/custome-controls/modal-info/modal-info.component';
import { Account } from '../../models/account.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit, OnDestroy {

  // currencyChangedSubject: Subject<string> = new Subject<string>();

  // currencyToChangedSubject: Subject<string> = new Subject<string>();
  amountToChangedSubject: Subject<Number> = new Subject<Number>();

  toCurrencyChangedSubject: Subject<string> = new Subject<string>();
  fromCurrencyChangedSubject: Subject<string> = new Subject<string>();

  accounts: Account[];
  isLoading = false;

  from_account_no = "";
  from_account_type = "";
  from_account_currency = "";
  from_account_acctual_balance : number;
  from_account_available_balance : string;
  from_account_selected = false;

  to_account_no = "";
  to_account_type = "";
  to_account_currency = "";
  to_account_acctual_balance : number;
  to_account_available_balance : string;
  to_account_selected = false;

  selected_transfer_type_value = "";
  selected_from_account_no_value = "";
  selected_to_account_no_value = "";
  description_value = "";
  transfer_amount_value : number;
  transfer_amount_to_value : number;

  data2 = [];
  info_message_title = 'Transfer Details';
  info_message_button_text = "Continue";
  transfer_succeeded = true;
  transfer_error_message = "";

  constructor(private authService: AuthService, 
              private accountService: AccountService,
              private transferService: TransferService,
              private modalSuccess: ModalSuccessComponent,
              private modalInfo: ModalInfoComponent,
              private router: Router) { }

  ngOnInit() {
    // this.isLoading = true;
    // this.accountService.getRimAccounts(parseInt(this.authService.getRimNumber())).subscribe(accounts => {
    //   // console.log(accounts)
    //   this.isLoading = false;
    //   if(accounts){
    //     this.accounts = accounts
    //     //console.log(this.accounts)
    //   }else{

    //   }
    // })
    this.getRimAccounts();
  }

  async getRimAccounts(){
    this.isLoading = true;
    await this.accountService.getRimAccounts(parseInt(this.authService.getRimNumber()));
    if(this.accountService.accountsList.length > 0){
      this.accounts = this.accountService.accountsList;
      this.isLoading = false;
    }
  }

  getAccountFromData(selectedAccount){
    if(selectedAccount.target.selectedIndex > 0){
      const selectedccountItem = selectedAccount.target.value
      const accountItems = selectedccountItem.split('-')
      if(accountItems.length == 2){// account & currecy
        this.from_account_no = accountItems[0].trim()
        // this.isValidaAccounts(this.from_account_no, this.to_account_no)
        this.from_account_currency = accountItems[1].trim()
        //get remaining data
        const account = this.accounts.filter(account => {
          return account.account_no == this.from_account_no
        })
        if(account.length === 1){
          this.from_account_type = account[0].account_type
          this.from_account_acctual_balance = account[0].actual_balance
          this.from_account_available_balance = parseFloat(account[0].available_balance.toString()).toFixed(2)
          if(parseFloat(this.from_account_available_balance) <= 0){
            this.from_account_selected = false
            //this.openModal(template)
            //this.showModal()
            
            selectedAccount.target.selectedIndex = 0
            
          }else{
            this.from_account_selected = true
          }
        }
        //notify app-money-field with account currency
        //this.currencyChangedSubject.next(this.from_account_currency);// to notify app-money-field that currency has been changed
        this.fromCurrencyChangedSubject.next(this.from_account_currency)
      }
    }else{
      this.clearFromAccountFields()
    }
  }

  getAccountToData(selectedAccount){
    if(selectedAccount.target.selectedIndex > 0){
      const selectedccountItem = selectedAccount.target.value
      const accountItems = selectedccountItem.split('-')
      if(accountItems.length == 2){// account & currecy
        this.to_account_no = accountItems[0].trim()
        this.isValidaAccounts(this.from_account_no, this.to_account_no)
        this.to_account_currency = accountItems[1].trim()
        //get remaining data
        const account = this.accounts.filter(account => {
          return account.account_no == this.to_account_no
        })
        if(account.length === 1){
          this.to_account_type = account[0].account_type
          this.to_account_acctual_balance = account[0].actual_balance
          this.to_account_available_balance = parseFloat(account[0].available_balance.toString()).toFixed(2)
          this.to_account_selected = true
        }
        //notify app-money-field with account currency
        //this.currencyToChangedSubject.next(this.to_account_currency);// to notify app-money-field that currency has been changed

        this.toCurrencyChangedSubject.next(this.to_account_currency);
      }
    }else{
      this.clearToAccountFields()
    }
  }

  isValidaAccounts(from_account_no: string, to_account_no: string) {
    
  }

  clearFromAccountFields(){
    this.from_account_type = ""
    this.from_account_acctual_balance = null
    this.from_account_available_balance = null
    this.from_account_currency = ""
    //this.currencyChangedSubject.next("");
    this.fromCurrencyChangedSubject.next("");
    this.transfer_amount_value = 0;
    this.from_account_selected = false
  }

  clearToAccountFields(){
    this.to_account_type = ""
    this.to_account_acctual_balance = null
    this.to_account_available_balance = null
    this.to_account_currency = ""
    //this.currencyToChangedSubject.next("");
    this.toCurrencyChangedSubject.next("");
    this.to_account_selected = false
  }

  setAmount(amount){
    // console.log("from amount", amount)
    this.transfer_amount_value = amount
    this.amountToChangedSubject.next(this.transfer_amount_value)
    //console.log(this.transfer_amount)
  }

  setToAmount(amount) {
    // console.log("to amount", amount)
    this.transfer_amount_to_value = amount
  }

  transfer(form: NgForm, infoMessageTemplate: TemplateRef<any>){
    // console.log(form)
    // console.log("transfer_amount_value", this.transfer_amount_value)
    if(form.invalid 
        || this.transfer_amount_value == 0 || this.transfer_amount_value == undefined
        || this.transfer_amount_to_value == 0 || this.transfer_amount_to_value == undefined){
      return;
    }
    else{
      this.showInfoMessage(infoMessageTemplate);
    }
  }

  transferConfirmed(confirmed: boolean, successMessageTemplate: TemplateRef<any>){
    // console.log(confirmed)
    if(confirmed){
      this.transferService.createTransfer(parseInt(this.selected_transfer_type_value), 
                                          this.selected_from_account_no_value.split('-')[0].trim(), 
                                          this.selected_to_account_no_value.split('-')[0].trim(),
                                          this.description_value,
                                          this.transfer_amount_value,
                                          this.transfer_amount_to_value,
                                          this.selected_from_account_no_value.split('-')[1].trim(),
                                          this.selected_to_account_no_value.split('-')[1].trim())
                          .subscribe( 
                          response => {
                            if(response.status == "accepted"){
                              console.log(response.refNumber);
                              this.transfer_succeeded = true;
                              this.router.navigate(['/success', response.refNumber]);
                            }
                            else if(response.status == "rejected"){
                              
                              
                            }
                          },
                          error => {
                            this.transfer_error_message = error.error.description;
                            this.transfer_succeeded = false;
                            console.log(error)
                          }
                        );
    }
  }

  public showSuccessMessage(template: TemplateRef<any>){
    this.modalSuccess.openModal(template)
  }

  public showInfoMessage(template: TemplateRef<any>){
    this.data2 = []
    this.data2.push(this.from_account_no)
    this.data2.push(this.to_account_no)
    this.data2.push(this.transfer_amount_value)
    this.data2.push(this.transfer_amount_to_value)
    this.data2.push(new Date().toISOString())
    //console.log(this.data2)
    this.modalInfo.openModal(template)
  }

  ngOnDestroy(): void {
  }
}
