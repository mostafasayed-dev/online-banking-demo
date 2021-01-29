import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RimService } from '../services/rim.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  loginStatusListener: Subscription
  customer_full_name = ""
  rim_no = ""
  loggedIn = false;
  
  constructor(private authService: AuthService,  
              private rimService: RimService,
              private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.authService.getIsAuthenticated()
    if(!this.loggedIn){
      this.router.navigate(['/'])
    }else{
      const rim_no = this.authService.getRimNumber()
      this.rimService.getRimDataByRimNumber(parseInt(rim_no)).subscribe(rim => {
        //console.log(rim)
        if(rim){
          this.customer_full_name = rim.customer_first_name + " " 
                                    + rim.customer_middle_name + " " 
                                    + rim.customer_last_name
          this.rim_no = rim.rim_no.toString()
        }else{
  
        }
      })
    }


    // register the listener and stert listening 
    this.loginStatusListener = this.authService.getLoginStatusListener().subscribe(
      status => {
        // console.log(status)
        this.loggedIn = status
        // console.log(this.loggedIn)
        if(this.loggedIn){// if user authenticated
          console.log("we are here 1")
          const rim_no = this.authService.getRimNumber()
          this.rimService.getRimDataByRimNumber(parseInt(rim_no)).subscribe(rim => {
            //console.log(rim)
            if(rim){
              this.customer_full_name = rim.customer_first_name + " " 
                                        + rim.customer_middle_name + " " 
                                        + rim.customer_last_name
              this.rim_no = rim.rim_no.toString()
            }else{
      
            }
          })
        }
      }
    )
  }

  logOut(){
    this.authService.logout()
  }

  ngOnDestroy(): void {
    // un register the listener and stop listening 
    this.loginStatusListener.unsubscribe()
  }

}
