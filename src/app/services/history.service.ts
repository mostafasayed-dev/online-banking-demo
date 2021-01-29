import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AccountHistory } from "../models/account-history.model";
import { History } from '../models/history.model';

const api_url = environment.api_url + "/history";

@Injectable({
    providedIn: 'root'
})
export class HistoryService{
    historyList: History[];
    accountHistoryList: AccountHistory[];
    count: number;
    referenceNumber = "";

    constructor(private http: HttpClient){

    }

    async getRimHistory(itemsPerPage: number, currentPage: number){
        const queryParams = `?pagesize=${itemsPerPage}&page=${currentPage}`;
        await this.http.get<{history: History[], count: number}>(api_url + queryParams)
                 .toPromise()
                 .then(
                     response => {
                        this.historyList = response.history;
                        this.count = response.count;
                     }
                 )
                 .catch(
                     error => {
                        console.log(error);
                     }
                 );
    }

    async getAccountHistory(accountNumber, itemsPerPage: number, currentPage: number){
        const queryParams = `?pagesize=${itemsPerPage}&page=${currentPage}`;
        await this.http.get<{history: any, count: number}>(api_url + "/" + accountNumber + queryParams)
                        .toPromise()
                        .then(
                            response => {
                                // this.historyList = response.history;
                                // re-formatting response
                                this.accountHistoryList = response.history.map(
                                    hist =>{
                                        return {
                                            date: hist.createdAt,
                                            transaction: hist.transaction,
                                            amount: accountNumber == hist.from_account? hist.from_amount : hist.to_amount,
                                            currency: accountNumber == hist.from_account? hist.from_currency : hist.to_currency
                                        }
                                    }
                                )
                                this.count = response.count;
                            }
                        )
                        .catch(
                            error => {
                                console.log(error);
                            }
                        )
    }

    async getHistoryByReferenceNumber(referenceNumber: string){
        await this.http.get<string>(api_url + "/reference/" + referenceNumber)
                        .toPromise()
                        .then(
                            response => {
                                this.referenceNumber = response;
                            }
                        )
                        .catch(
                            error => {
                                console.log(error);
                            }
                        )
    }
}