import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { HistoryComponent } from './views/history/history.component';
import { RatesComponent } from './views/rates/rates.component';
import { SuccessComponent } from './views/success/success.component';
import { TransfersComponent } from './views/transfers/transfers.component';


const routes: Routes = [
  { 
    path: 'accounts',
    component: AccountsComponent 
  },
  { 
    path: 'transfers',
    component: TransfersComponent 
  },
  { 
    path: 'history',
    component: HistoryComponent 
  },
  { 
    path: 'rates',
    component: RatesComponent 
  },
  { 
    path: 'about',
    component: AboutUsComponent 
  },
  { 
    path: 'success/:refNumber',// refNumber configured to be a required routing parameter
    component: SuccessComponent 
  },
  { 
    path: 'login',
    component: LoginComponent 
  },
  {
    path:'', 
    redirectTo:'login',
    pathMatch:'full'
  },
  /* Wildcard routing */
  { 
    path: '**',
    component: LoginComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
