import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const api_url = environment.api_url + "/transfers"

@Injectable({
    providedIn: 'root'
})
export class TransferService {

    constructor(private http: HttpClient) {
    }

    createTransfer(transfer_type: number, from_account: string, to_account: string, 
                    description: string, from_amount: number, to_amount: number, from_currency: string, to_currency: string){
        return this.http.post<any>(api_url, {
            transfer_type, 
            from_account, 
            to_account, 
            description, 
            from_amount,
            to_amount, 
            from_currency,
            to_currency})
    }
}