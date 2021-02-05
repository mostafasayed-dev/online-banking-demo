import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaQueryService } from 'src/app/services/media-query.service';
import { RatesService } from 'src/app/services/rate.service';
import { Rate } from "../../models/rate.model";

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit, OnDestroy {

  isLoading = false;
  intervalId = null;
  ratesList: Rate[];
  displayedColumns: string[] = ['currency', 'buyRate', 'sellRate', 'lastUpdated'];
  deviceWidthListener: Subscription;
  deviceWidth : number;

  constructor(public ratesService: RatesService,
              public mediaQueryService: MediaQueryService) { }

  ngOnInit() {
    this.isLoading = true;
    this.intervalId = setInterval(
      () => {
        this.getRates();
      }
      , 5000);
    // this.getRates();

    this.deviceWidth = this.mediaQueryService.getDeviceWidth();
    this.deviceWidthListener = this.mediaQueryService.getDeviceWidthListener().subscribe(
      width => {
        this.deviceWidth = width;
      }
    )
  }

  async getRates(){
    await this.ratesService.getRates();
    if(this.ratesService.ratesList.length > 0){
      this.ratesList = this.ratesService.ratesList;
      this.isLoading = false;
      //console.log(this.ratesList);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
