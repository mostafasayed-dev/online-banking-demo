import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable, Subscription } from 'rxjs';
import { RatesService } from 'src/app/services/rate.service';

@Component({
  selector: 'exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit, OnDestroy {

  private fromCurrencyChangedSub: Subscription;
  private toCurrencyChangedSub: Subscription;

  fromCurrency = "";
  toCurrency = "";
  buyRate: number = 0;
  sellRate: number = 0;
  isLoading = false;

  @Input('fromCurrencyChanged') fromCurrencyChangedEvent: Observable<string>;// to be notified from parent that currency has been changed
  @Input('toCurrencyChanged') toCurrencyChangedEvent: Observable<string>;// to be notified from parent that currency has been changed

  constructor(private ratesService: RatesService) { }

  ngOnInit() {
    // from currency changed event
    this.fromCurrencyChangedSub = this.fromCurrencyChangedEvent.subscribe(
      currency => {
        this.fromCurrency = currency;
        if(currency && currency != ""){
          
        }
      }
    )

    // to currency changed event
    this.toCurrencyChangedSub = this.toCurrencyChangedEvent.subscribe(
      currency => {
        this.toCurrency = currency;
        if(currency && currency != ""){
          this.isLoading = true;
          this.ratesService.getRate(currency).subscribe(
            response => {
              this.buyRate = response.buy_rate;
              this.sellRate = response.sell_rate;
              this.isLoading = false;
            },
            error => {
              this.isLoading = false;
              console.log(error)
            }
          )
        }else{
          this.buyRate = 0;
          this.sellRate = 0;
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.fromCurrencyChangedSub.unsubscribe();
    this.toCurrencyChangedSub.unsubscribe();
  }
}
