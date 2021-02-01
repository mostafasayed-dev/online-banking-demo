import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RatesService } from 'src/app/services/rate.service';

@Component({
  selector: 'money-rate',
  templateUrl: './money-rate.component.html',
  styleUrls: ['./money-rate.component.css']
})
export class MoneyRateComponent implements OnInit, OnDestroy {

  private fromCurrencyChangedSubscription: Subscription;
  private toCurrencyChangedSubscription: Subscription;
  private fromCurrency: string = "";
  private toCurrency: string = "";
  fromFullText: string = "0.00";
  toFullText: string = "0.00";
  private tempFromFullText: string;

  // @Input('from-currency') fromCurrency = ""
  // @Input('to-currency') toCurrency = ""
  @Input('fromCurrencyChanged') fromCurrencyChangedObservable: Observable<string>;// to be notified from parent that from currency has been changed
  @Input('toCurrencyChanged') toCurrencyChangedObservable: Observable<string>;// to be notified from parent that to currency has been changed

  @Output('fromAmountChanged') fromAmountChangedEvent = new EventEmitter()// to notify parent that from amount changed
  @Output('toAmountChanged') toAmountChangedEvent = new EventEmitter()// to notify parent that to amount changed
  
  constructor(private ratesService: RatesService) { }

  ngOnInit() {
    this.fromCurrencyChangedSubscription = this.fromCurrencyChangedObservable.subscribe(
      currency => {
        this.fromCurrency = currency;
        this.setFromFullText(this.fromCurrency);
        this.calculateRates();
        //console.log('fromCurrency',this.fromCurrency);
      }
    )

    this.toCurrencyChangedSubscription = this.toCurrencyChangedObservable.subscribe(
      currency => {
        this.toCurrency = currency;
        this.setToFullText_Currency(this.toCurrency);
        this.calculateRates();
        //console.log('toCurrency',this.toCurrency);
      }
    )
  }

  setFromFullText(currency){
    const amountCurrencyParts = this.fromFullText.split(" ");
    if(amountCurrencyParts.length >= 1){// only amount part
      this.fromFullText = amountCurrencyParts[0] + " " + currency;
    }
  }

  getFromFullText_Amount(){
    const amountCurrencyParts = this.fromFullText.split(" ");
    if(amountCurrencyParts.length == 2){// only amount part
      return parseFloat(amountCurrencyParts[0]).toFixed(2);
    }
    return parseFloat("0").toFixed(2);
  }

  setToFullText_Currency(currency){
    const amountCurrencyParts = this.toFullText.split(" ");
    if(amountCurrencyParts.length >= 1){// to get amount part
      this.toFullText = amountCurrencyParts[0] + " " + currency;
    }
  }

  setToFullText_Amount(amount){
    const amountCurrencyParts = this.toFullText.split(" ");
    if(amountCurrencyParts.length >= 1){// to get amount part
      this.toFullText = amount + " " + amountCurrencyParts[1];
    }
  }

  onFocus_FromText(value){
    const amountCurrencyParts = this.toFullText.split(" ");
    if(amountCurrencyParts.length >= 1){// to get amount part
      this.tempFromFullText = this.fromFullText;
      this.fromFullText = "";
    }
  }

  onTextChanged_FromText(value){
    // apply regular expression to delete characters if exists and allow only one decimal point
    this.fromFullText = this.fromFullText.replace(/[^0-9.]|\.(?=.*\.)/g,"")
  }

  onBlur_FromText(value){
    const amountCurrencyParts = this.tempFromFullText.split(" ");
    if(amountCurrencyParts.length == 2){// to get currency part
      if(this.fromFullText == ""){// amount does not changed
        this.fromFullText  = amountCurrencyParts[0]+ " " + amountCurrencyParts[1];
      }else{// amount changed
        if(this.fromFullText.includes(".")){
          if(this.fromFullText.endsWith(".")){
            this.fromFullText = this.fromFullText + "00"
          }
        }
        else{
          this.fromFullText = this.fromFullText + ".00"
        }
        this.fromAmountChangedEvent.emit(parseFloat(this.fromFullText).toFixed(2));
        this.fromFullText  = this.fromFullText + " " + amountCurrencyParts[1];
        this.calculateRates();
      }
    }
    else{ // there is no currency => 0.00
      this.fromFullText = "0.00";
    }
  }

  calculateRates(){
    if(this.toCurrency && this.toCurrency != ""){
      if(this.fromCurrency == this.toCurrency){
        let newToAmount = this.getFromFullText_Amount() as any;
        this.setToFullText_Amount(newToAmount);
        this.toAmountChangedEvent.emit(newToAmount.toFixed(2))
      }
      else{
        this.ratesService.getRate(this.fromCurrency).subscribe(
          rate => {
            // console.log(rate);
            let buyRate = rate.buy_rate;
            let sellRate = rate.sell_rate;
            let isBaseCurrency = rate.is_base_currency;
            if(isBaseCurrency){
              // from currency is base currency => from local to foreign
              this.ratesService.getRate(this.toCurrency).subscribe(
                rate => {
                  buyRate = rate.buy_rate;
                  sellRate = rate.sell_rate;
                  isBaseCurrency = rate.is_base_currency;

                  let newToAmount = this.getFromFullText_Amount() as any/ sellRate;
                  this.setToFullText_Amount(newToAmount.toFixed(2));
                  this.toAmountChangedEvent.emit(newToAmount.toFixed(2));
                }
              )
            }else{
              // from currency is not a base currency => from foreign to local
              this.ratesService.getRate(this.fromCurrency).subscribe(
                rate => {
                  buyRate = rate.buy_rate;
                  sellRate = rate.sell_rate;
                  isBaseCurrency = rate.is_base_currency;

                  let newToAmount = this.getFromFullText_Amount() as any * buyRate;
                  this.setToFullText_Amount(newToAmount.toFixed(2));
                  this.toAmountChangedEvent.emit(newToAmount.toFixed(2));
                }
              )
            }
          }
        )
      }
    }
  }

  ngOnDestroy() {
    this.fromCurrencyChangedSubscription.unsubscribe();
    this.toCurrencyChangedSubscription.unsubscribe();
  }

}
