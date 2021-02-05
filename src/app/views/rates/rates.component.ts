import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(public ratesService: RatesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.intervalId = setInterval(
      () => {
        this.getRates();
      }
      , 5000);
    // this.getRates();
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
