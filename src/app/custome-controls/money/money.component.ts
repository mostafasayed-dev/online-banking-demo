import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RatesService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-money-field',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit, OnDestroy {
  
  private currencyChangedSubscription: Subscription;
  private amountValueChangedSubscription: Subscription;

  @Input('currency') currency = ""
  @Input('other_currency') other_currency : string
  @Input('ctrl_disabled') ctrl_disabled = false
  @Input('is_base_currency') is_base_currency = false
  @Input('currencyChanged') currencyChangedEvent: Observable<string>;// to be notified from parent that currency has been changed
  @Input('amountValueChanged') amountValueChangedEvent: Observable<Number>;
  @Output('amountChanged') amountChanged = new EventEmitter()// to notify parent

  amount = "0.00"
  
  constructor(private ratesService: RatesService) { }

  ngOnInit() {
    this.currencyChangedSubscription = this.currencyChangedEvent.subscribe(
      currency => {
        this.changeCurrency(currency)
      });

    if(this.amountValueChangedEvent){
      this.amountValueChangedSubscription = this.amountValueChangedEvent.subscribe(
        amount => {
          // console.log(this.other_currency)
          if(this.currency){
          // calculate rates
          this.calculateRates(this.currency, amount);
          }
        }
      )
    }  
  }

  calculateRates(currency, amount){
    if(currency && amount){
      if(this.other_currency && currency == this.other_currency){
        const newAmount = <any>amount;
        this.amountChanged.emit(parseFloat(newAmount.toString()).toFixed(2));//notify parent that amount has been changed
        this.amount = parseFloat(newAmount.toString()).toFixed(2) + " " + this.currency;
      }
      else{
        this.ratesService.getRate(currency).subscribe(
          rate => {
            let buy_rate = rate.buy_rate
            let sell_rate = rate.sell_rate
            let is_base_currency = rate.is_base_currency
            if(is_base_currency){
              if(this.other_currency){
                this.ratesService.getRate(this.other_currency).subscribe(
                  other_rate => {
                    buy_rate = other_rate.buy_rate
                    sell_rate = other_rate.sell_rate
                    is_base_currency = other_rate.is_base_currency
      
                    const newAmount = <any>amount * <any>sell_rate
                    this.amountChanged.emit(parseFloat(newAmount.toString()).toFixed(2))//notify parent that amount has been changed
                    this.amount = parseFloat(newAmount.toString()).toFixed(2) + " " + this.currency
                  }
                )
              }
            }
            else{
              if(this.currency){
                const newAmount = <any>amount / <any>sell_rate
                this.amountChanged.emit(parseFloat(newAmount.toString()).toFixed(2))//notify parent that amount has been changed
                this.amount = parseFloat(newAmount.toString()).toFixed(2) + " " + this.currency
              }
            }
          }
        )
      }
    }
  }

  changeCurrency(currency){
    if(this.amount == "" || currency == ""){
      this.amount = "0.00"
    }
    if(!this.amount.includes(currency)){
      this.amount = this.amount.replace(/[^0-9.-]+/g,"")
      this.amount = this.amount + " " + currency
    }
    if(this.amount == "" || this.amount == " " + currency){
      this.amount = "0.00 " + currency
    }
    // console.log("changeCurrency => " + this.amount)
    this.getAmountWithoutCurrency(this.amount, currency)
  }

  getAmountWithoutCurrency(amountWithCurrency: string, currency: string){
    if(amountWithCurrency){
      const amountAndCurrency = amountWithCurrency.split(' ')
      this.calculateRates(currency, amountAndCurrency[0])
      // console.log('amount > ' + amountAndCurrency[0])
      // console.log('currency > ' + amountAndCurrency[1])
    }
  }

  onFocus(value){
    if(this.amount == "0 " + this.currency || this.amount == "0.00 " + this.currency){
      this.amount = ""
    }
    if(this.amount.includes(this.currency)){
      this.amount = this.amount.replace(/[^0-9.-]+/g,"")
    }
  }

  onBlur(value){
    this.amount = this.amount.replace(/[^0-9.-]+/g,"")// apply regX to delete characters if exists
    // console.log(this.amount)
    if(this.amount == ""){
      this.amount = "0.00"
    }else{
      if(!this.amount.includes("."))
        this.amount = this.amount + ".00";
    }
    
    // console.log(this.amount)
    this.amountChanged.emit(parseInt(this.amount))//notify parent that amount has been changed
    // console.log(parseInt(this.amount))
    if(!this.amount.includes(this.currency)){
      this.amount = this.amount + " " + this.currency;
    }
    if(this.amount == "" || this.amount == " " + this.currency){
      this.amount = "0.00 " + this.currency
    }
  }

  textChanged(text){
    //console.log(text)
  }

  ngOnDestroy() {
    if(this.currencyChangedSubscription){
      this.currencyChangedSubscription.unsubscribe();
    }
    if(this.amountValueChangedSubscription){
      this.amountValueChangedSubscription.unsubscribe();
    }
    
  }

}
