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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpinnerXComponent } from './custome-controls/spinner-x/spinner-x.component';
import { PageHeaderComponent } from './custome-controls/page-header/page-header.component';
import { MoneyComponent } from './custome-controls/money/money.component';
// import { AlertConfig, AlertModule }  from 'ngx-bootstrap/alert'
import { AngularMaterialModule } from './modules/angular-material.module';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { ModalSuccessComponent } from './custome-controls/modal-success/modal-success.component';
import { ModalInfoComponent } from './custome-controls/modal-info/modal-info.component';
import { ExchangeRateComponent } from './custome-controls/exchange-rate/exchange-rate.component';
import { SuccessComponent } from './views/success/success.component';
import { HistoryComponent } from './views/history/history.component';
import { PaginationComponent } from './custome-controls/pagination/pagination.component';
import { MoneyRateComponent } from './custome-controls/money-rate/money-rate.component';
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { RatesComponent } from './views/rates/rates.component';
import { DialogInfoComponent } from './custome-controls/dialog-info/dialog-info.component';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { DialogErrorComponent } from './custome-controls/dialog-error/dialog-error.component';

// Make sure the module was imported with npm install before you reference it. You get strong typing and Intellisense support.
// If you need to have globals exposed - globally for plug-ins or other non-typescript dependencies use
import $ from 'jquery/dist/jquery';// loading jQuery via module loading 
window["$"] = $;
window["jQuery"] = $;

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
    MoneyRateComponent,
    AboutUsComponent,
    RatesComponent,
    DialogInfoComponent,
    DialogErrorComponent
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
  providers: [ModalSuccessComponent, 
              ModalInfoComponent,
              {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
              {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent],
    //tell angular for components which will not be used as a selector or as a component in the router 
  entryComponents: [DialogInfoComponent, DialogErrorComponent]
})
export class AppModule { }
