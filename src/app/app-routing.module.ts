import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { HistoryComponent } from './views/history/history.component';
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
