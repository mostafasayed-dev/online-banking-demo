import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";

const api_url = environment.api_url + "/users"

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    private loginStatusListener = new Subject<boolean>();

    private tokenTimer: any;
    private isAuthenticated = false;
    private token: string
    private userId: string
    private rim_number: string
    
    constructor(private http: HttpClient, private router: Router){
    }

    getLoginStatusListener(){
        return this.loginStatusListener.asObservable()
    }

    getIsAuthenticated(){
        return this.isAuthenticated
    }

    getRimNumber(){
        return this.rim_number
    }

    login(username: string, password: string){
        // this.loginStatusListener.next(true)
        // localStorage.setItem('loggedIn','1')
        // this.router.navigate(['/accounts'])
        this.http.post<{token: string, expiresIn: number, _id: number, rim_no: number}>(api_url + "/login", {username: username, password: password})
                 .subscribe(response => {
                     const token = response.token
                     this.token = token
                     //console.log(token)
                     if(token){
                         const expiresInDuration = response.expiresIn
                         //console.log(expiresIn)
                         this.userId = response._id.toString()
                         this.rim_number = response.rim_no.toString()
                         //console.log(userId)
                         this.startTokenExpirationTimer(expiresInDuration)
                         this.isAuthenticated = true
                         this.loginStatusListener.next(true)

                         const now = new Date()
                         const tokenExpirationDate = new Date(now.getTime() + (expiresInDuration * 1000))
                         this.saveAuthenticationData(token, tokenExpirationDate, this.userId)
                         this.router.navigate(['/accounts'])// navigate to accounts page
                     }
                 }, error => {
                     this.loginStatusListener.next(false)
                 })
    }

    startTokenExpirationTimer(duration: number){
        this.tokenTimer = setTimeout(() => {
            this.logout()// log out when token expire 
        }, duration * 1000);
    }

    saveAuthenticationData(token: string, tokenExpirationDate: Date, userId: string){
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", tokenExpirationDate.toISOString());
        localStorage.setItem("_id", userId);
        localStorage.setItem("rim_no", this.rim_number);
    }

    logout(){
        // this.loginStatusListener.next(false)
        // localStorage.removeItem('loggedIn')
        // this.router.navigate(['/'])
        this.token = null
        this.isAuthenticated = false
        this.loginStatusListener.next(false)
        this.userId = null
        clearTimeout(this.tokenTimer)
        this.clearAuthenticationData()
        this.router.navigate(['/'])
    }

    private clearAuthenticationData(){
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("_id");
        localStorage.removeItem("rim_no");
    }

    private getAuthenticationData(){
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        const userId = localStorage.getItem("_id");
        const rim_no = localStorage.getItem("rim_no")

        if(!token || !expirationDate){
            return;
        }
        return{
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            rim_number: rim_no
        }
    }

    //for data availabality when refreshing the page
    autoAuthenticateUser(){
        const authInformation = this.getAuthenticationData();
        if(!authInformation){
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();//in milliseconds
        if(expiresIn > 0){
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.rim_number = authInformation.rim_number
            this.userId = authInformation.userId;
            this.startTokenExpirationTimer(expiresIn / 1000)//in seconds
            this.loginStatusListener.next(true);
        }
    }
}