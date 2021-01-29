import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const api_url = environment.api_url + "/rims"

@Injectable({
    providedIn: 'root'
})
export class RimService {

    constructor(private http: HttpClient) {
    }

    getRimDataByRimNumber(rimNumber: number){
        return this.http.get<{
            rim_no: number,
            customer_first_name: string,
            customer_middle_name: string,
            customer_last_name: string,
            bithdate: string,
            address_1: string,
            address_2: string,
            phone_1: string,
            phone_2: string,
            branch_id: number
        }>(api_url + "/" + rimNumber);
    }
}