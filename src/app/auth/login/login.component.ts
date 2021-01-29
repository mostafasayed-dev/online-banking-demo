import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatusListener: Subscription
  loginStatus = true

  username_focus = false;
  password_focus = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.getIsAuthenticated()){
      this.router.navigate(['/accounts'])
      return
    }
    this.loginStatusListener = this.authService.getLoginStatusListener().subscribe(
      status => {
        this.loginStatus = status
      }
    )
  }

  onLogin(form: NgForm){
    // console.log(form)
    if(form.invalid){
      return;
    }else{
      this.authService.login(form.value.username, form.value.password)
    }
  }

}
