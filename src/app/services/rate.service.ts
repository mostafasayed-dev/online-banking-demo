import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const api_url = environment.api_url + "/rates"

@Injectable({
    providedIn: 'root'
})
export class RatesService{

    constructor(private http: HttpClient){

    }

    getRate(currency: string){
        return this.http.get<{
            buy_rate: number, sell_rate: number, is_base_currency: boolean
        }>(api_url + "/" + currency)
    }
}