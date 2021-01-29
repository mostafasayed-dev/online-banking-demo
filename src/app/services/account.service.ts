import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { url } from "inspector";
import { environment } from "src/environments/environment";
import { Account } from '../models/account.model'

const api_url = environment.api_url + "/accounts"

@Injectable({
    providedIn: 'root'
})
export class AccountService{

    accountsList: Account[];
    count: number;
    constructor(private http: HttpClient){

    }

    // getRimAccounts(rimNumber: number){
    //     return this.http.get<{
    //         accounts: any
    //     }>(api_url + "/" + rimNumber.toString())
    // }

    async getRimAccounts(rimNumber: number, itemsPerPage: number = -1, currentPage: number = -1){
        const queryParams = `?pagesize=${itemsPerPage}&page=${currentPage}`;
        let full_url = api_url + "/" + rimNumber.toString()
        if(itemsPerPage != -1 && currentPage != -1){
            full_url = full_url + queryParams;
        }
        await this.http.get<{accounts: Account[], count: number}>(full_url)
                .toPromise()
                .then(
                    response => {
                        this.accountsList = response.accounts;
                        this.count = response.count;
                    }
                )
                .catch(
                    error => {
                        console.log(error);
                    }
                );
    }
}