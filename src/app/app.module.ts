import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AccountsComponent } from './views/accounts/accounts.component';
import { TransfersComponent } from './views/transfers/transfers.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerXComponent } from './custome-controls/spinner-x/spinner-x.component';
import { PageHeaderComponent } from './custome-controls/page-header/page-header.component';
import { MoneyComponent } from './custome-controls/money/money.component';
import { AlertConfig, AlertModule }  from 'ngx-bootstrap/alert'
import { AngularMaterialModule } from './modules/angular-material.module';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { ModalSuccessComponent } from './custome-controls/modal-success/modal-success.component';
import { ModalInfoComponent } from './custome-controls/modal-info/modal-info.component';
import { ExchangeRateComponent } from './custome-controls/exchange-rate/exchange-rate.component';
import { SuccessComponent } from './views/success/success.component';
import { HistoryComponent } from './views/history/history.component';
import { PaginationComponent } from './custome-controls/pagination/pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AccountsComponent,
    TransfersComponent,
    LoginComponent,
    SpinnerXComponent,
    PageHeaderComponent,
    MoneyComponent,
    ModalSuccessComponent,
    ModalInfoComponent,
    ExchangeRateComponent,
    SuccessComponent,
    HistoryComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    NgxBootstrapModule,
  ],
  providers: [ModalSuccessComponent, ModalInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
