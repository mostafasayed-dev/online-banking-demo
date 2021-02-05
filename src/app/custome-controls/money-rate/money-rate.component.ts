import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { RatesService } from 'src/app/services/rate.service';

@Component({
  selector: 'money-rate',
  templateUrl: './money-rate.component.html',
  styleUrls: ['./money-rate.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MoneyRateComponent),
      multi: true
    }
  ]
})
export class MoneyRateComponent implements OnInit, OnDestroy, ControlValueAccessor  {

  private fromCurrencyChangedSubscription: Subscription;
  private toCurrencyChangedSubscription: Subscription;
  private fromCurrency: string = "";
  private toCurrency: string = "";
  fromFullText: string = "";
  toFullText: string = "";
  fromPlaceholder = "0.00";
  isLoading = false;

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
        this.setFromCurrency(currency);
        this.calculateRate();
      }
    )

    this.toCurrencyChangedSubscription = this.toCurrencyChangedObservable.subscribe(
      currency => {
        this.toCurrency = currency;
        this.setToCurrency(currency);
        this.calculateRate();
      }
    )
  }

  setFromCurrency(currency: string){
    if(this.fromFullText != "" && currency.trim() != ""){
      if(this.fromFullText.split(" ").length == 2){
        this.fromFullText = this.fromFullText.split(" ")[0].trim() + " " + currency.trim() ;
      }
    }
    else{
      this.fromFullText = "";
    }
  }

  setToCurrency(currency: string){
    if(currency.trim() != ""){
      if(this.toFullText.split(" ")[0].trim() == ""){
        this.toFullText =  "0.00 " + currency.trim();
      }
      else{
        this.toFullText = this.toFullText.split(" ")[0].trim() + " " + currency.trim();
      }
    }
    else{
      this.toFullText = "";
    }
  }

  onFromAmountFocus(value){
    if(this.fromFullText != ""){
      if(this.fromFullText.split(" ").length == 2){
        this.fromFullText = this.fromFullText.split(" ")[0].trim();// reset to amount
      }
    }
  }

  onFromAmountTextChanged(value){
    if(value == ""){
      this.toFullText = "0.00 " + this.toCurrency;
    }
  }

  onFromAmountBlur(value){
    // apply regular expression to delete characters if exists and allow only one decimal point
    this.fromFullText = this.fromFullText.replace(/[^0-9.]|\.(?=.*\.)/g,"").trim();
    if(this.fromFullText != "" && this.fromCurrency){// amount entered and currency selected
      this.fromAmountChangedEvent.emit(parseFloat(this.fromFullText).toFixed(2));
      this.fromFullText = this.fromFullText + " " + this.fromCurrency; // on blur show currency part
      this.calculateRate();
    }
    else{
      this.fromFullText = "";
    }
  }

  calculateRate(){
    this.isLoading = true;
    if(this.fromCurrency && this.fromCurrency != ""
      && this.toCurrency && this.toCurrency != ""
      && this.fromFullText && this.fromFullText != ""
      && this.toFullText && this.toFullText != ""){
        const fromAmount = this.fromFullText.split(" ")[0];
        const toCurrency = this.toFullText.split(" ")[1];
        if(this.fromCurrency == this.toCurrency){
          this.toFullText = parseFloat(fromAmount).toFixed(2) + " " + toCurrency;
          this.toAmountChangedEvent.emit(parseFloat(fromAmount).toFixed(2));
        }
        else{
          this.ratesService.getRate(this.fromCurrency).subscribe(
            rate => {
              // console.log(rate);
              let buyRate = rate.buy_rate;
              let sellRate = rate.sell_rate;
              let isBaseCurrency = rate.is_base_currency;
              if(isBaseCurrency){
                // from currency is base currency => from local to foreign/local
                this.ratesService.getRate(this.toCurrency).subscribe(
                  rate => {
                    buyRate = rate.buy_rate;
                    sellRate = rate.sell_rate;
                    isBaseCurrency = rate.is_base_currency;
                    
                    let newToAmount = fromAmount as any/ sellRate;
                    this.toFullText = parseFloat(newToAmount.toString()).toFixed(2) + " " + toCurrency;
                    this.toAmountChangedEvent.emit(newToAmount.toFixed(2));
                  }
                )
              }else{
                // from currency is not a base currency => from foreign to local/foreign
                let newToAmount = fromAmount as any * buyRate;
                this.toFullText = parseFloat(newToAmount.toString()).toFixed(2) + " " + toCurrency;
                this.toAmountChangedEvent.emit(newToAmount.toFixed(2));
                // this.ratesService.getRate(this.fromCurrency).subscribe(
                //   rate => {
                //     buyRate = rate.buy_rate;
                //     sellRate = rate.sell_rate;
                //     isBaseCurrency = rate.is_base_currency;
  
                //     let newToAmount = fromAmount as any * buyRate;
                //     this.toFullText = parseFloat(newToAmount.toString()).toFixed(2) + " " + toCurrency;
                //     this.toAmountChangedEvent.emit(newToAmount.toFixed(2));
                //   }
                // )
              }
            }
          )
        }
      }
      this.isLoading = false;
  }

  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  input: string;
  writeValue(input: string) {
    this.input = input;
  }

  ngOnDestroy() {
    this.fromCurrencyChangedSubscription.unsubscribe();
    this.toCurrencyChangedSubscription.unsubscribe();
  }

}
