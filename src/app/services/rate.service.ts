import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Rate } from "../models/rate.model";

const api_url = environment.api_url + "/rates"

@Injectable({
    providedIn: 'root'
})
export class RatesService{

    ratesList: Rate[];

    constructor(private http: HttpClient){

    }

    getRate(currency: string){
        return this.http.get<{
            buy_rate: number, sell_rate: number, is_base_currency: boolean
        }>(api_url + "/" + currency);
    }

    async getRates(){
        await this.http.get<Rate[]>(api_url)
                .toPromise()
                .then(
                    response => {
                        // console.log(response);
                        this.ratesList = response;
                    }
                )
                .catch(
                    error => {
                        console.log(error);
                    }
                );
    }

    getForeignToforeignRate(fromForeignCurrency, toForeignCurrency, amount){
        return this.http.get<any>(api_url+"/foreigntoforeign", 
                            {params: {from_foreign_currency: fromForeignCurrency, 
                                      to_foreign_currency: toForeignCurrency, 
                                      amount}});
    }
}