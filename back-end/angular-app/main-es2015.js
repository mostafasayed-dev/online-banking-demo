(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-wrapper\">\n    <div class=\"form-content\">\n        <h3>Please Login</h3>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!loginStatus\">\n            Invalid Username or Password\n        </div>\n        <form (submit) = \"onLogin(loginForm)\" #loginForm=\"ngForm\">\n            <div class=\"mb-3\">\n                <!-- <label for=\"username\">Username</label> -->\n                <input \n                    type=\"text\" \n                    id=\"username\"\n                    name=\"username\" \n                    placeholder=\"Username\"\n                    class=\"form-control\"\n                    #username=\"ngModel\"  \n                    ngModel\n                    (focus)=\"username_focus=true\" (blur)=\"username_focus=false\"\n                    [ngStyle] = \"(username.touched && username.invalid) || (loginForm.submitted && username.invalid) ? \n                                    {'border-color': '#f5c6cb'} \n                                    : {'border-color': '#ced4da'}\"\n                    [ngClass]=\"{'focus-error': username_focus && ((username.touched && username.invalid) || (loginForm.submitted && username.invalid))}\"\n                    autocomplete=\"off\"\n                    required>\n            </div>\n            <div class=\"mb-3\">\n                <!-- <label for=\"password\">Password</label> -->\n                <input \n                    type=\"password\" \n                    id=\"password\" \n                    name=\"password\"\n                    placeholder=\"Password\"\n                    class=\"form-control\" \n                    #password=\"ngModel\"  \n                    ngModel \n                    (focus)=\"password_focus=true\" (blur)=\"password_focus=false\"\n                    [ngStyle] = \"(password.touched && password.invalid) || (loginForm.submitted && password.invalid) ? \n                                    {'border-color': '#f5c6cb'} \n                                    : {'border-color': '#ced4da'}\"\n                    [ngClass]=\"{'focus-error': password_focus && ((password.touched && password.invalid) || (loginForm.submitted && password.invalid))}\"\n                    required>\n            </div>\n            <button type=\"submit\" class=\"btn btn-login\">Login</button>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/exchange-rate/exchange-rate.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/exchange-rate/exchange-rate.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-4\">\n        <label for=\"buyRate\">\n            Buy Rate\n            <div class=\"spinner-border spinner-border-sm\" role=\"status\" *ngIf=\"isLoading == true\"></div>\n        </label>\n        <input \n        id=\"buyRate\"\n        name=\"buyRate\"\n        type=\"text\" \n        class=\"form-control\"\n        [value]=\"buyRate == 0? '' : buyRate\"\n        disabled>\n    </div>\n    <div class=\"col-md-4\">\n        <label for=\"currency\">Currency</label>\n        <input \n        id=\"currency\"\n        name=\"currency\"\n        type=\"text\" \n        class=\"form-control\"\n        [value] = \"toCurrency\"\n        disabled>\n    </div>\n    <div class=\"col-md-4\">\n        <label for=\"sellRate\">\n            Sell Rate\n            <div class=\"spinner-border spinner-border-sm\" role=\"status\" *ngIf=\"isLoading\"></div>\n        </label>\n        <input \n        id=\"sellRate\"\n        name=\"sellRate\"\n        type=\"text\" \n        class=\"form-control\"\n        [value]=\"sellRate == 0? '' : sellRate\"\n        disabled>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/modal-info/modal-info.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/modal-info/modal-info.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">\n        {{message_title}}\n        <i class=\"bi bi-check-circle-fill\"></i>\n    </h4>\n    <!-- <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n</div>\n<div class=\"modal-body\">\n    <!-- <div class=\"row\">\n        <div class=\"col\">\n            • From Account<br>\n            • To Account<br>\n            • Amount<br>\n            • Currency<br>\n        </div>\n        <div class=\"col\">\n            100000000787<br>\n            100000000999<br>\n            105.00<br>\n            USD<br>\n        </div>\n    </div> -->\n    <table class=\"table\">\n        <tbody>\n          <tr>\n            <th scope=\"row\">{{data1[0]}}</th>\n            <td>{{data2[0]}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">{{data1[1]}}</th>\n            <td>{{data2[1]}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">{{data1[2]}}</th>\n            <td colspan=\"2\">{{data2[2]}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">{{data1[3]}}</th>\n            <td colspan=\"2\">{{data2[3]}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">{{data1[4]}}</th>\n            <td colspan=\"2\">{{data2[4]}}</td>\n          </tr>\n        </tbody>\n      </table>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn\" (click)=\"closeModal()\">{{button1_text}}</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/modal-success/modal-success.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/modal-success/modal-success.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">\n        Transaction Accepted\n        <i class=\"bi bi-check-circle-fill\"></i>\n    </h4>\n    <!-- <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n</div>\n<div class=\"modal-body\">\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn\" (click)=\"closeModal()\">Ok</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/money/money.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/money/money.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input \n    name=\"amount\"\n    type=\"text\" \n    class=\"form-control form-control-sm\" \n    (focus)=\"onFocus(this)\"\n    (blur)=\"onBlur(this)\"\n    [(ngModel)]=\"amount\"\n    (ngModelChange) = \"textChanged($event)\"\n    [disabled] = \"ctrl_disabled\"\n    [value] = \"amount\"\n    autocomplete=\"off\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/page-header/page-header.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/page-header/page-header.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{header_text}}</h2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/pagination/pagination.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/pagination/pagination.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\">\n    <div class=\"pagination\">\n      <a (click)=\"setpBackward()\" [ngClass]= \"currentPage == 1 ? 'disabled' : ''\">&laquo;</a>\n      <a *ngIf=\"this.paginationCountObj?.length >= 1\" \n          class=\"page-item\" [ngClass]= \"currentPage == (1 + additinalPages) ? 'active' : ''\"\n          (click)=\"paginationItemClicked(0 + additinalPages)\">{{ additinalPages + 1 }}</a>\n      <a *ngIf=\"this.paginationCountObj?.length >= 2\"\n          class=\"page-item\" [ngClass]= \"currentPage == (2 + additinalPages) ? 'active' : ''\"\n          (click)=\"paginationItemClicked(1 + additinalPages)\">{{ additinalPages + 2 }}</a>\n      <a *ngIf=\"this.paginationCountObj?.length >= 3\"\n          class=\"page-item\" [ngClass]= \"currentPage == (3 + additinalPages) ? 'active' : ''\"\n          (click)=\"paginationItemClicked(2 + additinalPages)\">{{ additinalPages + 3 }}</a>\n      <a (click)=\"setpForward()\" [ngClass]= \"currentPage == this.paginationCountObj?.length ? 'disabled' : ''\">&raquo;</a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/spinner-x/spinner-x.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/spinner-x/spinner-x.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"spinner-grow text-primary\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-secondary\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-success\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-danger\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-warning\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n</div>\n<div class=\"spinner-grow text-info\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n</div> -->\n\n<div class=\"spinner-border\" style=\"width: 4rem; height: 4rem;\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"navbar fixed-bottom navbar-dark bg-primary\">\n    <div class=\"container-fluid\">\n      <p class=\"copyright\">Copyright &copy; 2021 by <u>Mostafa Sayed</u>. All rights reserved.</p>\n    </div>\n</nav> -->\n\n<!-- <div class=\"footer fixed-bottom navbar-dark bg-primary\"> -->\n<div class=\"footer fixed-bottom navbar-dark\">\n  <p class=\"copyright\">Copyright &copy; 2021 by <u>Mostafa Sayed</u>. All rights reserved.</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\"> -->\n<nav class=\"navbar navbar-expand-lg navbar-dark\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\"><i class=\"bi bi-globe2\"></i>nline Banking</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\" *ngIf=\"loggedIn\">\n            <a \n                class=\"nav-link\"\n                routerLink=\"accounts\" \n                routerLinkActive=\"active\"\n                >Accounts</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"loggedIn\">\n            <a \n                class=\"nav-link\" \n                routerLink=\"transfers\" \n                routerLinkActive=\"active\"\n                >Transfers</a>\n          </li>\n          <li class=\"nav-item\" *ngIf=\"loggedIn\">\n            <a \n              class=\"nav-link\"\n              routerLink=\"history\"\n              routerLinkActive=\"active\"\n              >History</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">About</a>\n          </li>\n          <!-- <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n          </li> -->\n        </ul>\n        <!-- ml-auto => align to right -->\n        <!-- <span class=\"ml-auto\">\n          {{customer_full_name}}\n        </span> -->\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item dropdown\" *ngIf=\"loggedIn\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">{{customer_full_name}} \n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"32\" fill=\"currentColor\" class=\"bi bi-person-circle\" viewBox=\"0 0 16 16\">\n                <path d=\"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z\"/>\n                <path fill-rule=\"evenodd\" d=\"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z\"/>\n              </svg>\n            </a>\n            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <li><a class=\"dropdown-item\" href=\"#\">Profile</a></li>\n              <li><a class=\"dropdown-item disabled\" href=\"#\">Settings</a></li>\n              <li><hr class=\"dropdown-divider\"></li>\n              <li><a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"logOut()\">Logout</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n</nav>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/accounts/accounts.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/accounts/accounts.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <app-page-header [header_text] = \"isAccountHistoryAvailable? 'Account History' : 'My Accounts'\"></app-page-header>\n\n    <app-pagination *ngIf=\"isAccountHistoryAvailable\"\n    [totalItemsCountChanged]=\"totalItemsCountChanged_history.asObservable()\"\n    [itemsPerPage]=\"itemsPerPage_history\"\n    (currentPageChanged)=\"currentHistoryPageChanged($event)\"></app-pagination>\n\n    <table mat-table [dataSource]=\"accountHistoryList\" class=\"mat-elevation-z8\" *ngIf=\"!isLoading && isAccountHistoryAvailable\">\n      <!-- Date -->\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef> Date </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          {{element.date}}</td>\n      </ng-container>\n      <!-- Transaction -->\n      <ng-container matColumnDef=\"transaction\">\n        <th mat-header-cell *matHeaderCellDef> Transaction </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          {{element.transaction}}</td>\n      </ng-container>\n      <!-- Amount -->\n      <ng-container matColumnDef=\"amount\">\n        <th mat-header-cell *matHeaderCellDef> Amount </th>\n        <td mat-cell *matCellDef=\"let element\"> \n          {{element.amount}} {{element.currency}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></tr>\n    </table>\n\n    <div class=\"row center\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\">\n        <button \n          *ngIf=\"isAccountHistoryAvailable\"\n          class=\"btn btn-default back\" \n          (click)=\"back()\">Back</button>\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n\n    <app-pagination *ngIf=\"!isAccountHistoryAvailable\"\n    [totalItemsCountChanged]=\"totalItemsCountChanged_accounts.asObservable()\"\n    [itemsPerPage]=\"itemsPerPage_accounts\"\n    (currentPageChanged)=\"currentAccountPageChanged($event)\"></app-pagination>\n\n    <!-- <div class=\"table-container mat-elevation-z8\"> -->\n      <table mat-table [dataSource]=\"rim_accounts\" class=\"mat-elevation-z8\" \n            *ngIf=\"!isLoading && !isAccountHistoryAvailable\">\n        <!-- Account No. -->\n        <ng-container matColumnDef=\"account_no\">\n          <th mat-header-cell *matHeaderCellDef > Account No. </th>\n          <td mat-cell *matCellDef=\"let element\" > \n            <strong>{{element.account_no}}</strong> </td>\n        </ng-container>\n        <!-- Account Type -->\n        <ng-container matColumnDef=\"account_type\">\n          <th class=\"account-type\" mat-header-cell *matHeaderCellDef [hidden]=\"deviceWidth <= 465\"> Account Type </th>\n          <td class=\"account-type\" mat-cell *matCellDef=\"let element\" [hidden]=\"deviceWidth <= 465\"> {{element.account_type}} </td>\n        </ng-container>\n        <!-- Currency -->\n        <ng-container matColumnDef=\"account_currency\">\n          <th mat-header-cell *matHeaderCellDef> Currency </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.account_currency}} </td>\n        </ng-container>\n        <!-- Act. Balance -->\n        <ng-container matColumnDef=\"actual_balance\">\n          <th mat-header-cell *matHeaderCellDef [hidden]=\"deviceWidth <= 465\"> Act. Balance </th>\n          <td mat-cell *matCellDef=\"let element\" [hidden]=\"deviceWidth <= 465\"> {{element.actual_balance.toFixed(2)}} </td>\n        </ng-container>\n        <!-- Avail. Balance -->\n        <ng-container matColumnDef=\"available_balance\">\n          <th mat-header-cell *matHeaderCellDef> Avail. Balance </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.available_balance.toFixed(2)}} </td>\n        </ng-container>\n        <!-- Details -->\n        <ng-container matColumnDef=\"details\">\n          <th mat-header-cell *matHeaderCellDef> ... </th>\n          <td mat-cell *matCellDef=\"let element\">  \n            <button class=\"btn btn-default details\" (click)=\"getAccountDetails(element.account_no)\">Details</button>\n          </td>\n        </ng-container>\n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" \n        [ngClass] = \"[row.available_balance <= 0 ? 'table-danger' : '']\"></tr>\n      </table>\n    <!-- </div> -->\n\n</div>\n<app-spinner-x *ngIf=\"isLoading\"></app-spinner-x>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/history/history.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/history/history.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <app-page-header [header_text] = \"'History'\"></app-page-header>\n    \n    <app-pagination \n    [totalItemsCountChanged]=\"totalItemsCountChanged.asObservable()\"\n    [itemsPerPage]=\"itemsPerPage\"\n    (currentPageChanged)=\"currentPageChanged($event)\"></app-pagination>\n\n    <table mat-table [dataSource]=\"historyList\" class=\"mat-elevation-z8\" *ngIf=\"!isLoading\">\n          <!-- Date -->\n          <ng-container matColumnDef=\"createdAt\">\n            <th mat-header-cell *matHeaderCellDef> Date </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              {{element.createdAt}}</td>\n          </ng-container>\n          <!-- Transaction -->\n          <ng-container matColumnDef=\"transaction\">\n            <th mat-header-cell *matHeaderCellDef> Transaction </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              {{element.transaction}}</td>\n          </ng-container>\n          <!-- From Account  -->\n          <ng-container matColumnDef=\"from_account\">\n            <th mat-header-cell *matHeaderCellDef> From Account </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              {{element.from_account? element.from_account: ''}} {{element.from_account_type? element.from_account_type.substring(0,3): ''}}</td>\n          </ng-container>\n          <!-- To Account -->\n          <ng-container matColumnDef=\"to_account\">\n            <th mat-header-cell *matHeaderCellDef> To Account </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              {{element.to_account? element.to_account: ''}} {{element.to_account_type? element.to_account_type.substring(0,3): ''}}</td>\n          </ng-container>\n          <!-- From Amount -->\n          <ng-container matColumnDef=\"from_amount\">\n            <th mat-header-cell *matHeaderCellDef> From Amount </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              {{element.from_amount? element.from_amount: ''}} {{element.from_currency? element.from_currency: ''}}</td>\n          </ng-container>\n          <!-- To Amount -->\n          <ng-container matColumnDef=\"to_amount\">\n            <th mat-header-cell *matHeaderCellDef> To Amount </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              {{element.to_amount? element.to_amount: ''}} {{element.to_currency? element.to_currency: ''}}</td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <app-spinner-x *ngIf=\"isLoading\"></app-spinner-x>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/success/success.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/success/success.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container center\">\n    <h1 *ngIf=\"isValidReferenceNumber && referenceNumber != ''\">Transaction Accepted</h1>\n    <h1 class=\"uncheck\" *ngIf=\"!isValidReferenceNumber && referenceNumber == ''\">Invalid Reference Number!</h1>\n    <i [ngClass]=\"(!isValidReferenceNumber && referenceNumber == '') ? 'bi bi-x-circle uncheck' : \n                  (isValidReferenceNumber && referenceNumber != '') ? 'bi bi-check-circle check' : ''\"></i>\n    <h4 *ngIf=\"isValidReferenceNumber\">Reference Number: {{referenceNumber}}</h4>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transfers/transfers.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/transfers/transfers.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"!isLoading\">\n    <app-page-header [header_text] = \"'Account To Account Transfer'\"></app-page-header>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!transfer_succeeded\">\n        <strong>Transfer Failed! </strong>—{{transfer_error_message}}\n    </div>\n    <form (submit) = \"transfer(transferForm)\" #transferForm=\"ngForm\">\n        <!-- transfer type -->\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <label for=\"transfer_type\">Transfer Type</label>\n                    <div class=\"d-flex justify-content-start\">\n                        <select \n                            class=\"form-select form-control-sm\"\n                            id=\"transfer_type\"\n                            name=\"transfer_type\"\n                            [(ngModel)]= \"selected_transfer_type_value\"\n                            required>\n                            <option value=\"-1\" selected>Choose...</option>\n                            <option value=\"0\">Internal Transfer</option>\n                            <option disabled value=\"1\">External Transfer</option>\n                        </select>\n                        <i [ngClass]=\"(transferForm.controls.transfer_type?.touched \n                        && transferForm.value.transfer_type == -1) ? 'bi bi-x-circle uncheck' \n                        : (transferForm.value.transfer_type > -1) ? 'bi bi-check-circle check' : 'bi bi-check-circle none'\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- from account -->\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label for=\"from_account\">From Account</label>\n                    <div class=\"d-flex justify-content-start\">\n                        <select \n                            class=\"form-select form-control-sm\" \n                            id=\"from_account\"\n                            name=\"from_account\"\n                            (change) = \"getAccountFromData($event)\"\n                            [(ngModel)] = \"selected_from_account_no_value\"\n                            required>\n                            <option value=\"-1\" selected>Choose...</option>\n                            <option *ngFor=\"let account of accounts\"\n                            [disabled] = \"account.available_balance == 0\"\n                            [ngStyle] = \"account.available_balance == 0 ? {'color': 'rgb(200, 0, 0)'} : {} \"\n                            >{{account.account_no}} - {{account.account_currency}}</option>\n                        </select>\n                        <i [ngClass]=\"(transferForm.controls.from_account?.touched && transferForm.value.from_account == -1) ? 'bi bi-x-circle uncheck' \n                                        : (transferForm.value.from_account != -1) ? 'bi bi-check-circle check' : 'bi bi-check-circle none'\"></i>\n                    </div>\n                </div>\n                <!-- to account -->\n                <div class=\"col-md-6\">\n                    <label for=\"to_account\">To Account</label>\n                    <div class=\"d-flex justify-content-start\">\n                        <select \n                            class=\"form-select form-control-sm\" \n                            id=\"to_account\"\n                            name=\"to_account\"\n                            (change) = \"getAccountToData($event)\"\n                            [(ngModel)] = \"selected_to_account_no_value\"\n                            required>\n                            <option value=\"-1\" selected>Choose...</option>\n                            <option *ngFor=\"let account of accounts\">{{account.account_no}} - {{account.account_currency}}</option>\n                        </select>\n                        <i [ngClass]=\"(transferForm.controls.to_account?.touched && transferForm.value.to_account == -1) ? 'bi bi-x-circle uncheck' \n                                        : (transferForm.value.to_account != -1) ? 'bi bi-check-circle check' : 'bi bi-check-circle none'\"></i>\n                    </div>\n                </div>\n\n                <!-- <div class=\"col-md-6\" *ngIf=\"from_account_selected\" hidden>\n                    <div class=\"row account_details\">\n                        <div class=\"col-sm-4\">\n                            <label for=\"from_account_type\">Account Type</label>\n                            <input \n                                type=\"text\" \n                                id=\"from_account_type\"\n                                name=\"from_account_type\"\n                                class=\"form-control\"\n                                [ngModel]=\"from_account_type\"\n                                disabled>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <label for=\"from_account_available_balance\">Available Balance</label>\n                            <input \n                                type=\"text\" \n                                class=\"form-control\"\n                                id=\"from_account_available_balance\" \n                                name=\"from_account_available_balance\"\n                                [ngModel]=\"from_account_available_balance\"\n                                disabled>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <label for=\"from_account_acctual_balance\">Actual Balance</label>\n                            <input \n                                type=\"text\" \n                                class=\"form-control\" \n                                id=\"from_account_acctual_balance\" \n                                name=\"from_account_acctual_balance\"\n                                [ngModel]=\"from_account_acctual_balance\"\n                                disabled>\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        <!-- to account -->\n        <!-- <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label for=\"to_account\">To Account</label>\n                    <div class=\"d-flex justify-content-start\">\n                        <select \n                            class=\"form-select form-control-sm\" \n                            id=\"to_account\"\n                            name=\"to_account\"\n                            (change) = \"getAccountToData($event)\"\n                            [(ngModel)] = \"selected_to_account_no_value\"\n                            required>\n                            <option value=\"-1\" selected>Choose...</option>\n                            <option *ngFor=\"let account of accounts\">{{account.account_no}} - {{account.account_currency}}</option>\n                        </select>\n                        <i [ngClass]=\"(transferForm.controls.to_account?.touched && transferForm.value.to_account == -1) ? 'bi bi-x-circle uncheck' \n                                        : (transferForm.value.to_account != -1) ? 'bi bi-check-circle check' : 'bi bi-check-circle none'\"></i>\n                    </div>\n                </div>\n                <div class=\"col-md-6\" *ngIf=\"to_account_selected\" hidden>\n                    <div class=\"row account_details\">\n                        <div class=\"col-sm-4\">\n                            <label for=\"to_account_type\">Account Type</label>\n                            <input \n                                type=\"text\" \n                                class=\"form-control\" \n                                id=\"to_account_type\" \n                                name=\"to_account_type\"\n                                [ngModel]=\"to_account_type\"\n                                disabled>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <label for=\"to_account_available_balance\">Available Balance</label>\n                            <input \n                                type=\"text\" \n                                class=\"form-control\" \n                                id=\"to_account_available_balance\" \n                                name=\"to_account_available_balance\"\n                                [ngModel]=\"to_account_available_balance\"\n                                disabled>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <label for=\"to_account_acctual_balance\">Actual Balance</label>\n                            <input \n                                type=\"text\" \n                                class=\"form-control\" \n                                id=\"to_account_acctual_balance\" \n                                name=\"to_account_acctual_balance\"\n                                [ngModel]=\"to_account_acctual_balance\"\n                                disabled>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n        <!-- amount -->\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <label for=\"transfer_amount\">From Amount</label>\n                    <div class=\"d-flex justify-content-start\">\n                        <app-money-field\n                            id=\"transfer_amount\"\n                            name=\"transfer_amount\"\n                            (amountChanged) = \"setAmount($event)\"\n                            [(currency)]=\"from_account_currency\"\n                            [currencyChanged]=\"currencyChangedSubject.asObservable()\"\n                            [is_base_currency]=\"true\"></app-money-field>\n                            <i [ngClass]=\"transfer_amount_value == 0 ? 'bi bi-x-circle uncheck' : (transfer_amount_value != 0 && transfer_amount_value != undefined) ? 'bi bi-check-circle check' : 'bi bi-check-circle none'\"></i>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <label for=\"transfer_amount_to\">To Amount</label>\n                    <div class=\"d-flex justify-content-start\">\n                        <app-money-field\n                        id=\"transfer_amount_to\"\n                        name=\"transfer_amount_to\"\n                        (amountChanged) = \"setToAmount($event)\"\n                        [(currency)]=\"to_account_currency\"\n                        [(other_currency)] = \"from_account_currency\"\n                        [currencyChanged]=\"currencyToChangedSubject.asObservable()\"\n                        [amountValueChanged] = \"amountToChangedSubject.asObservable()\"\n                        [ctrl_disabled]=\"true\"\n                        [is_base_currency] = \"false\"></app-money-field>      \n                    </div>            \n                </div>\n                <div class=\"col-sm-6\">\n\n                </div>\n            </div>\n        </div>\n        <!-- description -->\n        <div class=\"form-group\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <label for=\"description\">Description <span class=\"hint\">(Optional)</span></label>\n                    <div class=\"d-flex justify-content-start\">\n                        <input \n                        id=\"description\"\n                        name=\"description\"\n                        type=\"text\" \n                        class=\"form-control form-control-sm\" \n                        [(ngModel)] = \"description_value\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"row\">\n            <mat-divider></mat-divider>\n        </div> -->\n        <!-- submit -->\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n            </div>\n            <div class=\"col-md-2\">\n                <button class=\"btn btn-default btn-transfer btn-block\" \n                        type=\"submit\"\n                        (click)=\"showInfoMessage(infoMessageTemplate)\"\n                        [disabled] = \"transferForm.value.transfer_type == -1 ||\n                                        transferForm.value.from_account == -1 ||\n                                        transferForm.value.to_account == -1 ||\n                                        transfer_amount_value == 0 || transfer_amount_value == undefined\">\n                    Transfer\n                    <!-- <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Transfer...</span> -->\n                </button>\n            </div>\n        </div>\n    </form>\n</div>\n<app-spinner-x *ngIf=\"isLoading\"></app-spinner-x>\n<!-- success message -->\n<ng-template #successMessageTemplate>\n    <app-modal-success>\n    </app-modal-success>\n</ng-template>\n<!-- Info message -->\n<ng-template #infoMessageTemplate>\n    <app-modal-info [data1]=\"['From Account', 'To Account', 'From Amount', 'To Amount', 'Trasaction Date']\"\n                    [data2]=\"data2\"\n                    [message_title] = \"info_message_title\"\n                    [button1_text] = \"info_message_button_text\"\n                    (confirmed) = \"transferConfirmed($event, successMessageTemplate)\">\n    </app-modal-info>\n</ng-template>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _views_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/accounts/accounts.component */ "./src/app/views/accounts/accounts.component.ts");
/* harmony import */ var _views_history_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/history/history.component */ "./src/app/views/history/history.component.ts");
/* harmony import */ var _views_success_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/success/success.component */ "./src/app/views/success/success.component.ts");
/* harmony import */ var _views_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/transfers/transfers.component */ "./src/app/views/transfers/transfers.component.ts");








const routes = [
    {
        path: 'accounts',
        component: _views_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_4__["AccountsComponent"]
    },
    {
        path: 'transfers',
        component: _views_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_7__["TransfersComponent"]
    },
    {
        path: 'history',
        component: _views_history_history_component__WEBPACK_IMPORTED_MODULE_5__["HistoryComponent"]
    },
    {
        path: 'success/:refNumber',
        component: _views_success_success_component__WEBPACK_IMPORTED_MODULE_6__["SuccessComponent"]
    },
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    /* Wildcard routing */
    {
        path: '**',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_media_query_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/media-query.service */ "./src/app/services/media-query.service.ts");




let AppComponent = class AppComponent {
    constructor(authService, mediaQueryService) {
        this.authService = authService;
        this.mediaQueryService = mediaQueryService;
    }
    ngOnInit() {
        this.mediaQueryService.startSubscripbeForBreakpoint();
        this.authService.autoAuthenticateUser();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_media_query_service__WEBPACK_IMPORTED_MODULE_3__["MediaQueryService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _views_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/accounts/accounts.component */ "./src/app/views/accounts/accounts.component.ts");
/* harmony import */ var _views_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/transfers/transfers.component */ "./src/app/views/transfers/transfers.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _custome_controls_spinner_x_spinner_x_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./custome-controls/spinner-x/spinner-x.component */ "./src/app/custome-controls/spinner-x/spinner-x.component.ts");
/* harmony import */ var _custome_controls_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custome-controls/page-header/page-header.component */ "./src/app/custome-controls/page-header/page-header.component.ts");
/* harmony import */ var _custome_controls_money_money_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./custome-controls/money/money.component */ "./src/app/custome-controls/money/money.component.ts");
/* harmony import */ var _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/angular-material.module */ "./src/app/modules/angular-material.module.ts");
/* harmony import */ var _modules_ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/ngx-bootstrap.module */ "./src/app/modules/ngx-bootstrap.module.ts");
/* harmony import */ var _custome_controls_modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./custome-controls/modal-success/modal-success.component */ "./src/app/custome-controls/modal-success/modal-success.component.ts");
/* harmony import */ var _custome_controls_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./custome-controls/modal-info/modal-info.component */ "./src/app/custome-controls/modal-info/modal-info.component.ts");
/* harmony import */ var _custome_controls_exchange_rate_exchange_rate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./custome-controls/exchange-rate/exchange-rate.component */ "./src/app/custome-controls/exchange-rate/exchange-rate.component.ts");
/* harmony import */ var _views_success_success_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/success/success.component */ "./src/app/views/success/success.component.ts");
/* harmony import */ var _views_history_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/history/history.component */ "./src/app/views/history/history.component.ts");
/* harmony import */ var _custome_controls_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./custome-controls/pagination/pagination.component */ "./src/app/custome-controls/pagination/pagination.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            _views_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_6__["AccountsComponent"],
            _views_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_7__["TransfersComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _custome_controls_spinner_x_spinner_x_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerXComponent"],
            _custome_controls_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_14__["PageHeaderComponent"],
            _custome_controls_money_money_component__WEBPACK_IMPORTED_MODULE_15__["MoneyComponent"],
            _custome_controls_modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_18__["ModalSuccessComponent"],
            _custome_controls_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_19__["ModalInfoComponent"],
            _custome_controls_exchange_rate_exchange_rate_component__WEBPACK_IMPORTED_MODULE_20__["ExchangeRateComponent"],
            _views_success_success_component__WEBPACK_IMPORTED_MODULE_21__["SuccessComponent"],
            _views_history_history_component__WEBPACK_IMPORTED_MODULE_22__["HistoryComponent"],
            _custome_controls_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_23__["PaginationComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_16__["AngularMaterialModule"],
            _modules_ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_17__["NgxBootstrapModule"],
        ],
        providers: [_custome_controls_modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_18__["ModalSuccessComponent"], _custome_controls_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_19__["ModalInfoComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* error => #f5c6cb */\r\n\r\nmat-card {\r\n    background-color: rgb(250, 250, 250);\r\n}\r\n\r\n.form-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 75%;\r\n}\r\n\r\n.form-content {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\nbutton.btn-login {\r\n    /* margin-bottom: 45px; */\r\n    background-color: #19547b;\r\n    color: white;\r\n}\r\n\r\n.focus-error {\r\n    box-shadow: 0 0 0 0.2rem rgba(221, 62, 123, 0.25)\r\n}\r\n\r\n/* button {\r\n    margin-top: 20px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjs7QUFFckI7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXJyb3IgPT4gI2Y1YzZjYiAqL1xyXG5cclxubWF0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNzUlO1xyXG59XHJcblxyXG4uZm9ybS1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi1sb2dpbiB7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA0NXB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NTQ3YjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvY3VzLWVycm9yIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIyMSwgNjIsIDEyMywgMC4yNSlcclxufVxyXG5cclxuLyogYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginStatus = true;
        this.username_focus = false;
        this.password_focus = false;
    }
    ngOnInit() {
        if (this.authService.getIsAuthenticated()) {
            this.router.navigate(['/accounts']);
            return;
        }
        this.loginStatusListener = this.authService.getLoginStatusListener().subscribe(status => {
            this.loginStatus = status;
        });
    }
    onLogin(form) {
        // console.log(form)
        if (form.invalid) {
            return;
        }
        else {
            this.authService.login(form.value.username, form.value.password);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/custome-controls/exchange-rate/exchange-rate.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/custome-controls/exchange-rate/exchange-rate.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWUtY29udHJvbHMvZXhjaGFuZ2UtcmF0ZS9leGNoYW5nZS1yYXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/custome-controls/exchange-rate/exchange-rate.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/custome-controls/exchange-rate/exchange-rate.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExchangeRateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRateComponent", function() { return ExchangeRateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_rate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rate.service */ "./src/app/services/rate.service.ts");



let ExchangeRateComponent = class ExchangeRateComponent {
    constructor(ratesService) {
        this.ratesService = ratesService;
        this.fromCurrency = "";
        this.toCurrency = "";
        this.buyRate = 0;
        this.sellRate = 0;
        this.isLoading = false;
    }
    ngOnInit() {
        // from currency changed event
        this.fromCurrencyChangedSub = this.fromCurrencyChangedEvent.subscribe(currency => {
            this.fromCurrency = currency;
            if (currency && currency != "") {
            }
        });
        // to currency changed event
        this.toCurrencyChangedSub = this.toCurrencyChangedEvent.subscribe(currency => {
            this.toCurrency = currency;
            if (currency && currency != "") {
                this.isLoading = true;
                this.ratesService.getRate(currency).subscribe(response => {
                    this.buyRate = response.buy_rate;
                    this.sellRate = response.sell_rate;
                    this.isLoading = false;
                }, error => {
                    this.isLoading = false;
                    console.log(error);
                });
            }
            else {
                this.buyRate = 0;
                this.sellRate = 0;
            }
        });
    }
    ngOnDestroy() {
        this.fromCurrencyChangedSub.unsubscribe();
        this.toCurrencyChangedSub.unsubscribe();
    }
};
ExchangeRateComponent.ctorParameters = () => [
    { type: src_app_services_rate_service__WEBPACK_IMPORTED_MODULE_2__["RatesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('fromCurrencyChanged')
], ExchangeRateComponent.prototype, "fromCurrencyChangedEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('toCurrencyChanged')
], ExchangeRateComponent.prototype, "toCurrencyChangedEvent", void 0);
ExchangeRateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'exchange-rate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exchange-rate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/exchange-rate/exchange-rate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exchange-rate.component.css */ "./src/app/custome-controls/exchange-rate/exchange-rate.component.css")).default]
    })
], ExchangeRateComponent);



/***/ }),

/***/ "./src/app/custome-controls/modal-info/modal-info.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/custome-controls/modal-info/modal-info.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\r\n    color: #2471A3;\r\n}\r\n\r\n/* to be centered */\r\n\r\nbutton {\r\n    display: block;\r\n    background-color: #2471A3;\r\n    color: white;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    \r\n}\r\n\r\nbutton:hover {\r\n    background-color: #3498DB;\r\n    color: white;\r\n}\r\n\r\n.modal-header {\r\n\r\n    background-color: #19547b;\r\n}\r\n\r\n.modal-header h4,\r\ni {\r\n    color: #fff;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZS1jb250cm9scy9tb2RhbC1pbmZvL21vZGFsLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUEsbUJBQW1COztBQUNuQjtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWUtY29udHJvbHMvbW9kYWwtaW5mby9tb2RhbC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICAgIGNvbG9yOiAjMjQ3MUEzO1xyXG59XHJcblxyXG4vKiB0byBiZSBjZW50ZXJlZCAqL1xyXG5idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ3MUEzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4REI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTU0N2I7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgaDQsXHJcbmkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/custome-controls/modal-info/modal-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/custome-controls/modal-info/modal-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoComponent", function() { return ModalInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
var ModalInfoComponent_1;



let ModalInfoComponent = ModalInfoComponent_1 = class ModalInfoComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openModal(template) {
        ModalInfoComponent_1.modalRef = this.modalService.show(template);
    }
    closeModal() {
        ModalInfoComponent_1.modalRef.hide();
        this.confirmed.emit(true);
        console.log(this.message_title);
        console.log(this.button1_text);
    }
};
ModalInfoComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('message_title')
], ModalInfoComponent.prototype, "message_title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('button1_text')
], ModalInfoComponent.prototype, "button1_text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data1')
], ModalInfoComponent.prototype, "data1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data2')
], ModalInfoComponent.prototype, "data2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('confirmed')
], ModalInfoComponent.prototype, "confirmed", void 0);
ModalInfoComponent = ModalInfoComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/modal-info/modal-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-info.component.css */ "./src/app/custome-controls/modal-info/modal-info.component.css")).default]
    })
], ModalInfoComponent);



/***/ }),

/***/ "./src/app/custome-controls/modal-success/modal-success.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/custome-controls/modal-success/modal-success.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\r\n    color: rgb(0, 100, 0);\r\n}\r\n\r\n/* to be centered */\r\n\r\nbutton {\r\n    display: block;\r\n    background-color: rgb(0, 100, 0);\r\n    color: white;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    min-width: 100px;\r\n}\r\n\r\nbutton:hover {\r\n    color: white;\r\n    background-color: rgb(0, 110, 0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZS1jb250cm9scy9tb2RhbC1zdWNjZXNzL21vZGFsLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxtQkFBbUI7O0FBQ25CO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZS1jb250cm9scy9tb2RhbC1zdWNjZXNzL21vZGFsLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xyXG4gICAgY29sb3I6IHJnYigwLCAxMDAsIDApO1xyXG59XHJcblxyXG4vKiB0byBiZSBjZW50ZXJlZCAqL1xyXG5idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTAwLCAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMTAsIDApO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/custome-controls/modal-success/modal-success.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/custome-controls/modal-success/modal-success.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSuccessComponent", function() { return ModalSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
var ModalSuccessComponent_1;



let ModalSuccessComponent = ModalSuccessComponent_1 = class ModalSuccessComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    openModal(template) {
        ModalSuccessComponent_1.modalRef = this.modalService.show(template);
    }
    closeModal() {
        ModalSuccessComponent_1.modalRef.hide();
    }
};
ModalSuccessComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
ModalSuccessComponent = ModalSuccessComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-success',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/modal-success/modal-success.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-success.component.css */ "./src/app/custome-controls/modal-success/modal-success.component.css")).default]
    })
], ModalSuccessComponent);



/***/ }),

/***/ "./src/app/custome-controls/money/money.component.css":
/*!************************************************************!*\
  !*** ./src/app/custome-controls/money/money.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWUtY29udHJvbHMvbW9uZXkvbW9uZXkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/custome-controls/money/money.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/custome-controls/money/money.component.ts ***!
  \***********************************************************/
/*! exports provided: MoneyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyComponent", function() { return MoneyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_rate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rate.service */ "./src/app/services/rate.service.ts");



let MoneyComponent = class MoneyComponent {
    constructor(ratesService) {
        this.ratesService = ratesService;
        this.currency = "";
        this.ctrl_disabled = false;
        this.is_base_currency = false;
        this.amountChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // to notify parent
        this.amount = "0.00";
    }
    ngOnInit() {
        this.currencyChangedSubscription = this.currencyChangedEvent.subscribe(currency => {
            this.changeCurrency(currency);
        });
        if (this.amountValueChangedEvent) {
            this.amountValueChangedSubscription = this.amountValueChangedEvent.subscribe(amount => {
                // console.log(this.other_currency)
                if (this.currency) {
                    // calculate rates
                    this.calculateRates(this.currency, amount);
                }
            });
        }
    }
    calculateRates(currency, amount) {
        if (currency && amount) {
            if (this.other_currency && currency == this.other_currency) {
                const newAmount = amount;
                this.amountChanged.emit(parseFloat(newAmount.toString()).toFixed(2)); //notify parent that amount has been changed
                this.amount = parseFloat(newAmount.toString()).toFixed(2) + " " + this.currency;
            }
            else {
                this.ratesService.getRate(currency).subscribe(rate => {
                    let buy_rate = rate.buy_rate;
                    let sell_rate = rate.sell_rate;
                    let is_base_currency = rate.is_base_currency;
                    if (is_base_currency) {
                        if (this.other_currency) {
                            this.ratesService.getRate(this.other_currency).subscribe(other_rate => {
                                buy_rate = other_rate.buy_rate;
                                sell_rate = other_rate.sell_rate;
                                is_base_currency = other_rate.is_base_currency;
                                const newAmount = amount * sell_rate;
                                this.amountChanged.emit(parseFloat(newAmount.toString()).toFixed(2)); //notify parent that amount has been changed
                                this.amount = parseFloat(newAmount.toString()).toFixed(2) + " " + this.currency;
                            });
                        }
                    }
                    else {
                        if (this.currency) {
                            const newAmount = amount / sell_rate;
                            this.amountChanged.emit(parseFloat(newAmount.toString()).toFixed(2)); //notify parent that amount has been changed
                            this.amount = parseFloat(newAmount.toString()).toFixed(2) + " " + this.currency;
                        }
                    }
                });
            }
        }
    }
    changeCurrency(currency) {
        if (this.amount == "" || currency == "") {
            this.amount = "0.00";
        }
        if (!this.amount.includes(currency)) {
            this.amount = this.amount.replace(/[^0-9.-]+/g, "");
            this.amount = this.amount + " " + currency;
        }
        if (this.amount == "" || this.amount == " " + currency) {
            this.amount = "0.00 " + currency;
        }
        // console.log("changeCurrency => " + this.amount)
        this.getAmountWithoutCurrency(this.amount, currency);
    }
    getAmountWithoutCurrency(amountWithCurrency, currency) {
        if (amountWithCurrency) {
            const amountAndCurrency = amountWithCurrency.split(' ');
            this.calculateRates(currency, amountAndCurrency[0]);
            // console.log('amount > ' + amountAndCurrency[0])
            // console.log('currency > ' + amountAndCurrency[1])
        }
    }
    onFocus(value) {
        if (this.amount == "0 " + this.currency || this.amount == "0.00 " + this.currency) {
            this.amount = "";
        }
        if (this.amount.includes(this.currency)) {
            this.amount = this.amount.replace(/[^0-9.-]+/g, "");
        }
    }
    onBlur(value) {
        this.amount = this.amount.replace(/[^0-9.-]+/g, ""); // apply regX to delete characters if exists
        // console.log(this.amount)
        if (this.amount == "") {
            this.amount = "0.00";
        }
        else {
            if (!this.amount.includes("."))
                this.amount = this.amount + ".00";
        }
        // console.log(this.amount)
        this.amountChanged.emit(parseInt(this.amount)); //notify parent that amount has been changed
        // console.log(parseInt(this.amount))
        if (!this.amount.includes(this.currency)) {
            this.amount = this.amount + " " + this.currency;
        }
        if (this.amount == "" || this.amount == " " + this.currency) {
            this.amount = "0.00 " + this.currency;
        }
    }
    textChanged(text) {
        //console.log(text)
    }
    ngOnDestroy() {
        if (this.currencyChangedSubscription) {
            this.currencyChangedSubscription.unsubscribe();
        }
        if (this.amountValueChangedSubscription) {
            this.amountValueChangedSubscription.unsubscribe();
        }
    }
};
MoneyComponent.ctorParameters = () => [
    { type: src_app_services_rate_service__WEBPACK_IMPORTED_MODULE_2__["RatesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('currency')
], MoneyComponent.prototype, "currency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('other_currency')
], MoneyComponent.prototype, "other_currency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ctrl_disabled')
], MoneyComponent.prototype, "ctrl_disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('is_base_currency')
], MoneyComponent.prototype, "is_base_currency", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('currencyChanged')
], MoneyComponent.prototype, "currencyChangedEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('amountValueChanged')
], MoneyComponent.prototype, "amountValueChangedEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('amountChanged')
], MoneyComponent.prototype, "amountChanged", void 0);
MoneyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-money-field',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./money.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/money/money.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./money.component.css */ "./src/app/custome-controls/money/money.component.css")).default]
    })
], MoneyComponent);



/***/ }),

/***/ "./src/app/custome-controls/page-header/page-header.component.css":
/*!************************************************************************!*\
  !*** ./src/app/custome-controls/page-header/page-header.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    color: white;\r\n    background-color: #19547b;\r\n    -webkit-animation: fadeIn 0.5s ease-in both;\r\n            animation: fadeIn 0.5s ease-in both;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n\tfrom {\r\n\t\topacity: 0;\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t}\r\n\tto {\r\n\t\topacity: 1;\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t}\r\n}\r\n\r\n@keyframes fadeIn {\r\n\tfrom {\r\n\t\topacity: 0;\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t}\r\n\tto {\r\n\t\topacity: 1;\r\n\t\ttransform: translate3d(0, 0, 0);\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZS1jb250cm9scy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7O0FBRUE7Q0FDQztFQUNDLFVBQVU7RUFDViwrQkFBK0I7Q0FDaEM7Q0FDQTtFQUNDLFVBQVU7RUFDViwrQkFBK0I7Q0FDaEM7QUFDRDs7QUFUQTtDQUNDO0VBQ0MsVUFBVTtFQUNWLCtCQUErQjtDQUNoQztDQUNBO0VBQ0MsVUFBVTtFQUNWLCtCQUErQjtDQUNoQztBQUNEIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZS1jb250cm9scy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTU0N2I7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW4gYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG5cdGZyb20ge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcblx0fVxyXG5cdHRvIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG5cdH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/custome-controls/page-header/page-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/custome-controls/page-header/page-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageHeaderComponent = class PageHeaderComponent {
    constructor() { }
    ngOnInit() {
        // console.log(this.header_text)
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('header_text')
], PageHeaderComponent.prototype, "header_text", void 0);
PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/page-header/page-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-header.component.css */ "./src/app/custome-controls/page-header/page-header.component.css")).default]
    })
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/custome-controls/pagination/pagination.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/custome-controls/pagination/pagination.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.disabled {\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n    opacity: 0.5;\r\n    /* border: 1px solid rgb(175, 175, 175); */\r\n}\r\n\r\n.pagination {\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.pagination a {\r\n    color: black;\r\n    float: left;\r\n    padding: 8px 16px;\r\n    text-decoration: none;\r\n    border: 1px solid #ddd;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    font-size: 15px;\r\n}\r\n\r\n.pagination a.active {\r\n    background-color: #19547b;\r\n    color: white;\r\n    border: 1px solid #19547b;\r\n}\r\n\r\n.pagination a.active:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.pagination a:hover:not(.active) {\r\n    background-color: #ddd; \r\n    cursor: pointer;\r\n}\r\n\r\n.pagination a:first-child {\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.pagination a:last-child {\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZS1jb250cm9scy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZS1jb250cm9scy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEuZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE3NSwgMTc1LCAxNzUpOyAqL1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4gIFxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuICBcclxuLnBhZ2luYXRpb24gYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NTQ3YjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOTU0N2I7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEuYWN0aXZlOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAgXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAgXHJcbi5wYWdpbmF0aW9uIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcbiAgXHJcbi5wYWdpbmF0aW9uIGE6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/custome-controls/pagination/pagination.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/custome-controls/pagination/pagination.component.ts ***!
  \*********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.paginationCountObj = null; // array object with length of totalItemsCount
        this.currentPage = 1; // curent page index
        this.additinalPages = 0; // additional pages like 1,2,3 || 2,3,4 || 3,4,5 => aditional pages = 2
        this.count = 0; // number of pages
        this.currentPageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // to notify parent with current page
    }
    ngOnInit() {
        this.totalItemsCountChangedSubscription = this.totalItemsCountChangedEvent.subscribe(totalItemsCount => {
            this.count = Math.ceil(totalItemsCount / this.itemsPerPage); // number of pages
            this.paginationCountObj = new Array(this.count);
        });
    }
    paginationItemClicked(index) {
        if (this.currentPage - index == 1) {
            return;
        }
        if (index <= this.currentPage) {
            this.currentPage = index + 1;
        }
        else {
            if ((this.currentPage + index) - index > 1) {
                this.currentPage = this.currentPage + index - ((this.currentPage + index) - index) + 1;
            }
            else {
                this.currentPage = this.currentPage + index;
            }
        }
        this.currentPageChanged.emit(this.currentPage);
    }
    setpForward() {
        if (this.currentPage == this.paginationCountObj.length) {
            return;
        }
        if (this.currentPage > 2) {
            if ((this.paginationCountObj.length - this.additinalPages) > 3) { // review this condition
                this.additinalPages += 1;
            }
        }
        this.currentPage++;
        this.currentPageChanged.emit(this.currentPage);
        console.log('currentPage', this.currentPage);
        console.log('additinalPages', this.additinalPages);
        console.log('paginationCountObj.length', this.paginationCountObj.length);
    }
    setpBackward() {
        if (this.currentPage == 1) {
            return;
        }
        if (this.currentPage > 2) {
            if (this.additinalPages > 0) {
                this.additinalPages -= 1;
            }
        }
        this.currentPage--;
        if (this.currentPage == 1 && this.additinalPages == 1) {
            this.additinalPages = 0;
        }
        this.currentPageChanged.emit(this.currentPage);
    }
    ngOnDestroy() {
        this.totalItemsCountChangedSubscription.unsubscribe();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('totalItemsCountChanged')
], PaginationComponent.prototype, "totalItemsCountChangedEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemsPerPage')
], PaginationComponent.prototype, "itemsPerPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('currentPageChanged')
], PaginationComponent.prototype, "currentPageChanged", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/pagination/pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.css */ "./src/app/custome-controls/pagination/pagination.component.css")).default]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/custome-controls/spinner-x/spinner-x.component.css":
/*!********************************************************************!*\
  !*** ./src/app/custome-controls/spinner-x/spinner-x.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    color: #19547b;\r\n    position: fixed;\r\n    z-index: 999;\r\n    overflow: show;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n    height: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZS1jb250cm9scy9zcGlubmVyLXgvc3Bpbm5lci14LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZS1jb250cm9scy9zcGlubmVyLXgvc3Bpbm5lci14LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgY29sb3I6ICMxOTU0N2I7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBvdmVyZmxvdzogc2hvdztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/custome-controls/spinner-x/spinner-x.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/custome-controls/spinner-x/spinner-x.component.ts ***!
  \*******************************************************************/
/*! exports provided: SpinnerXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerXComponent", function() { return SpinnerXComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerXComponent = class SpinnerXComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpinnerXComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner-x',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner-x.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/custome-controls/spinner-x/spinner-x.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner-x.component.css */ "./src/app/custome-controls/spinner-x/spinner-x.component.css")).default]
    })
], SpinnerXComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".copyright {\r\n    color: white;\r\n    margin: 10px auto;\r\n    text-align: center;\r\n}\r\n\r\ndiv{\r\n    /* background-color: #2980b9; */\r\n    background-color: #19547b;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvcHlyaWdodCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZGl2e1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTU0N2I7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/modules/angular-material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/angular-material.module.ts ***!
  \****************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        //a feature which angular offer in case you exporting and importing the same modules
        //import will be done automatically by angular without need to export them
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"]
        ] //to be able to exports in another module
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/modules/ngx-bootstrap.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/ngx-bootstrap.module.ts ***!
  \*************************************************/
/*! exports provided: NgxBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBootstrapModule", function() { return NgxBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");







let NgxBootstrapModule = class NgxBootstrapModule {
};
NgxBootstrapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__["AlertModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"]
        ],
        providers: [ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_2__["AlertConfig"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationConfig"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"],
            ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_6__["PositioningService"] //Modals
        ]
    })
], NgxBootstrapModule);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\r\n    /* background-color: #2980b9; */\r\n    background-color: #19547b;\r\n}\r\n\r\nspan {\r\n    color: white;\r\n}\r\n\r\na.navbar-brand {\r\n    color: white;\r\n}\r\n\r\na.navbar-brand:hover {\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NTQ3YjtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmEubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYS5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_rim_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/rim.service */ "./src/app/services/rim.service.ts");





let NavComponent = class NavComponent {
    constructor(authService, rimService, router) {
        this.authService = authService;
        this.rimService = rimService;
        this.router = router;
        this.customer_full_name = "";
        this.rim_no = "";
        this.loggedIn = false;
    }
    ngOnInit() {
        this.loggedIn = this.authService.getIsAuthenticated();
        if (!this.loggedIn) {
            this.router.navigate(['/']);
        }
        else {
            const rim_no = this.authService.getRimNumber();
            this.rimService.getRimDataByRimNumber(parseInt(rim_no)).subscribe(rim => {
                //console.log(rim)
                if (rim) {
                    this.customer_full_name = rim.customer_first_name + " "
                        + rim.customer_middle_name + " "
                        + rim.customer_last_name;
                    this.rim_no = rim.rim_no.toString();
                }
                else {
                }
            });
        }
        // register the listener and stert listening 
        this.loginStatusListener = this.authService.getLoginStatusListener().subscribe(status => {
            // console.log(status)
            this.loggedIn = status;
            // console.log(this.loggedIn)
            if (this.loggedIn) { // if user authenticated
                console.log("we are here 1");
                const rim_no = this.authService.getRimNumber();
                this.rimService.getRimDataByRimNumber(parseInt(rim_no)).subscribe(rim => {
                    //console.log(rim)
                    if (rim) {
                        this.customer_full_name = rim.customer_first_name + " "
                            + rim.customer_middle_name + " "
                            + rim.customer_last_name;
                        this.rim_no = rim.rim_no.toString();
                    }
                    else {
                    }
                });
            }
        });
    }
    logOut() {
        this.authService.logout();
    }
    ngOnDestroy() {
        // un register the listener and stop listening 
        this.loginStatusListener.unsubscribe();
    }
};
NavComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_rim_service__WEBPACK_IMPORTED_MODULE_4__["RimService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/accounts";
let AccountService = class AccountService {
    constructor(http) {
        this.http = http;
    }
    // getRimAccounts(rimNumber: number){
    //     return this.http.get<{
    //         accounts: any
    //     }>(api_url + "/" + rimNumber.toString())
    // }
    getRimAccounts(rimNumber, itemsPerPage = -1, currentPage = -1) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const queryParams = `?pagesize=${itemsPerPage}&page=${currentPage}`;
            let full_url = api_url + "/" + rimNumber.toString();
            if (itemsPerPage != -1 && currentPage != -1) {
                full_url = full_url + queryParams;
            }
            yield this.http.get(full_url)
                .toPromise()
                .then(response => {
                this.accountsList = response.accounts;
                this.count = response.count;
            })
                .catch(error => {
                console.log(error);
            });
        });
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/users";
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.loginStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isAuthenticated = false;
    }
    getLoginStatusListener() {
        return this.loginStatusListener.asObservable();
    }
    getIsAuthenticated() {
        return this.isAuthenticated;
    }
    getRimNumber() {
        return this.rim_number;
    }
    login(username, password) {
        console.log('api_url', api_url);
        console.log('environment', src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production);
        // this.loginStatusListener.next(true)
        // localStorage.setItem('loggedIn','1')
        // this.router.navigate(['/accounts'])
        this.http.post(api_url + "/login", { username: username, password: password })
            .subscribe(response => {
            const token = response.token;
            this.token = token;
            //console.log(token)
            if (token) {
                const expiresInDuration = response.expiresIn;
                //console.log(expiresIn)
                this.userId = response._id.toString();
                this.rim_number = response.rim_no.toString();
                //console.log(userId)
                this.startTokenExpirationTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.loginStatusListener.next(true);
                const now = new Date();
                const tokenExpirationDate = new Date(now.getTime() + (expiresInDuration * 1000));
                this.saveAuthenticationData(token, tokenExpirationDate, this.userId);
                this.router.navigate(['/accounts']); // navigate to accounts page
            }
        }, error => {
            this.loginStatusListener.next(false);
        });
    }
    startTokenExpirationTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout(); // log out when token expire 
        }, duration * 1000);
    }
    saveAuthenticationData(token, tokenExpirationDate, userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", tokenExpirationDate.toISOString());
        localStorage.setItem("_id", userId);
        localStorage.setItem("rim_no", this.rim_number);
    }
    logout() {
        // this.loginStatusListener.next(false)
        // localStorage.removeItem('loggedIn')
        // this.router.navigate(['/'])
        this.token = null;
        this.isAuthenticated = false;
        this.loginStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthenticationData();
        this.router.navigate(['/']);
    }
    clearAuthenticationData() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("_id");
        localStorage.removeItem("rim_no");
    }
    getAuthenticationData() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        const userId = localStorage.getItem("_id");
        const rim_no = localStorage.getItem("rim_no");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            rim_number: rim_no
        };
    }
    //for data availabality when refreshing the page
    autoAuthenticateUser() {
        const authInformation = this.getAuthenticationData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime(); //in milliseconds
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.rim_number = authInformation.rim_number;
            this.userId = authInformation.userId;
            this.startTokenExpirationTimer(expiresIn / 1000); //in seconds
            this.loginStatusListener.next(true);
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/history.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/history.service.ts ***!
  \*********************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/history";
let HistoryService = class HistoryService {
    constructor(http) {
        this.http = http;
        this.referenceNumber = "";
    }
    getRimHistory(itemsPerPage, currentPage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const queryParams = `?pagesize=${itemsPerPage}&page=${currentPage}`;
            yield this.http.get(api_url + queryParams)
                .toPromise()
                .then(response => {
                this.historyList = response.history;
                this.count = response.count;
            })
                .catch(error => {
                console.log(error);
            });
        });
    }
    getAccountHistory(accountNumber, itemsPerPage, currentPage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const queryParams = `?pagesize=${itemsPerPage}&page=${currentPage}`;
            yield this.http.get(api_url + "/" + accountNumber + queryParams)
                .toPromise()
                .then(response => {
                // this.historyList = response.history;
                // re-formatting response
                this.accountHistoryList = response.history.map(hist => {
                    return {
                        date: hist.createdAt,
                        transaction: hist.transaction,
                        amount: accountNumber == hist.from_account ? hist.from_amount : hist.to_amount,
                        currency: accountNumber == hist.from_account ? hist.from_currency : hist.to_currency
                    };
                });
                this.count = response.count;
            })
                .catch(error => {
                console.log(error);
            });
        });
    }
    getHistoryByReferenceNumber(referenceNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.http.get(api_url + "/reference/" + referenceNumber)
                .toPromise()
                .then(response => {
                this.referenceNumber = response;
            })
                .catch(error => {
                console.log(error);
            });
        });
    }
};
HistoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], HistoryService);



/***/ }),

/***/ "./src/app/services/media-query.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/media-query.service.ts ***!
  \*************************************************/
/*! exports provided: MediaQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaQueryService", function() { return MediaQueryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let MediaQueryService = class MediaQueryService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.deviceWidth = 1200;
        this.deviceWidthListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    startSubscripbeForBreakpoint() {
        this.breakpointObserver
            .observe(['(min-width: 466px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.deviceWidth = 1200;
                this.deviceWidthListener.next(1200);
                // console.log('1200px')
            }
            else {
                this.deviceWidth = 465;
                this.deviceWidthListener.next(465);
                // console.log('400px')
            }
        });
    }
    getDeviceWidthListener() {
        return this.deviceWidthListener;
    }
    getDeviceWidth() {
        return this.deviceWidth;
    }
};
MediaQueryService.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }
];
MediaQueryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MediaQueryService);



/***/ }),

/***/ "./src/app/services/rate.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/rate.service.ts ***!
  \******************************************/
/*! exports provided: RatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesService", function() { return RatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/rates";
let RatesService = class RatesService {
    constructor(http) {
        this.http = http;
    }
    getRate(currency) {
        return this.http.get(api_url + "/" + currency);
    }
};
RatesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RatesService);



/***/ }),

/***/ "./src/app/services/rim.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/rim.service.ts ***!
  \*****************************************/
/*! exports provided: RimService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RimService", function() { return RimService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/rims";
let RimService = class RimService {
    constructor(http) {
        this.http = http;
    }
    getRimDataByRimNumber(rimNumber) {
        return this.http.get(api_url + "/" + rimNumber);
    }
};
RimService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RimService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RimService);



/***/ }),

/***/ "./src/app/services/transfer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/transfer.service.ts ***!
  \**********************************************/
/*! exports provided: TransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferService", function() { return TransferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/transfers";
let TransferService = class TransferService {
    constructor(http) {
        this.http = http;
    }
    createTransfer(transfer_type, from_account, to_account, description, from_amount, to_amount, from_currency, to_currency) {
        return this.http.post(api_url, {
            transfer_type,
            from_account,
            to_account,
            description,
            from_amount,
            to_amount,
            from_currency,
            to_currency
        });
    }
};
TransferService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TransferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TransferService);



/***/ }),

/***/ "./src/app/views/accounts/accounts.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/accounts/accounts.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    background-color: rgb(250, 250, 250);\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\n/* .table-container {\r\n    overflow: auto;\r\n} */\r\n\r\n@media only screen and (max-width: 480px){\r\n    table th, table td{\r\n        padding-left: 20px;\r\n    }\r\n}\r\n\r\nbutton.details {\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    font-size: 14px;\r\n}\r\n\r\nbutton.back {\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    margin-top: 20px;\r\n    width: 30%;\r\n}\r\n\r\n.cards-container:last-child {\r\n    margin-bottom: 45px;\r\n}\r\n\r\nmat-card-content {\r\n    margin-bottom: 0px;\r\n}\r\n\r\ndiv.container {\r\n    /* margin-top: 20px; */\r\n}\r\n\r\np.available-balance-greater-than-0 {\r\n    color:green;\r\n}\r\n\r\np.available-balance-less-than-0,\r\ntd.available-balance-less-than-0 {\r\n    color: rgb(200, 0, 0);\r\n}\r\n\r\np.actual-balance {\r\n    color: #19547b;\r\n}\r\n\r\n/* button.btn-details {\r\n    background-color: #19547b;\r\n    color: white;\r\n} */\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n\r\n.back {\r\n    margin-top: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWNjb3VudHMvYWNjb3VudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztHQUdHOztBQUVIO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYWNjb3VudHMvYWNjb3VudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiAudGFibGUtY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICAgIHRhYmxlIHRoLCB0YWJsZSB0ZHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1dHRvbi5kZXRhaWxzIHtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5idXR0b24uYmFjayB7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uY2FyZHMtY29udGFpbmVyOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxufVxyXG5cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmRpdi5jb250YWluZXIge1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cclxufVxyXG5cclxucC5hdmFpbGFibGUtYmFsYW5jZS1ncmVhdGVyLXRoYW4tMCB7XHJcbiAgICBjb2xvcjpncmVlbjtcclxufVxyXG5cclxucC5hdmFpbGFibGUtYmFsYW5jZS1sZXNzLXRoYW4tMCxcclxudGQuYXZhaWxhYmxlLWJhbGFuY2UtbGVzcy10aGFuLTAge1xyXG4gICAgY29sb3I6IHJnYigyMDAsIDAsIDApO1xyXG59XHJcblxyXG5cclxucC5hY3R1YWwtYmFsYW5jZSB7XHJcbiAgICBjb2xvcjogIzE5NTQ3YjtcclxufVxyXG5cclxuLyogYnV0dG9uLmJ0bi1kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTU0N2I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/accounts/accounts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/accounts/accounts.component.ts ***!
  \******************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/history.service */ "./src/app/services/history.service.ts");
/* harmony import */ var src_app_services_media_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/media-query.service */ "./src/app/services/media-query.service.ts");







let AccountsComponent = class AccountsComponent {
    constructor(authService, accountService, historyService, mediaQueryService) {
        this.authService = authService;
        this.accountService = accountService;
        this.historyService = historyService;
        this.mediaQueryService = mediaQueryService;
        // as Subject doesn't fire the totalItemsCountChangedSubscription subject in pagination component
        // It is actually a better idea to use BehaviorSubject. 
        // This will provide the last value when it is subscribed to.
        // or ca n use setTimeout(() => this.itemSupplier$.next(this.items), 0) instead
        this.totalItemsCountChanged_accounts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0); // notify pagination control with total number of items
        this.currentPage_accounts = 1; // curent page index
        this.itemsPerPage_accounts = 4; // configurable => represent items displayed per page
        this.totalItemsCount_accounts = 0;
        this.totalItemsCountChanged_history = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0); // notify pagination control with total number of items
        this.currentPage_history = 1; // curent page index
        this.itemsPerPage_history = 3; // configurable => represent items displayed per page
        this.totalItemsCount_history = 0;
        this.isLoading = false;
        this.isAccountHistoryAvailable = false;
        this.selectedAccount = "";
        this.displayedColumns = ['account_no', 'account_type', 'account_currency', 'actual_balance', 'available_balance', 'details'];
        this.displayedColumns1 = ['date',
            'transaction',
            'amount'];
    }
    ngOnInit() {
        // this.isLoading = true;
        // this.accountService.getRimAccounts(parseInt(this.authService.getRimNumber())).subscribe(accounts => {
        //   // console.log(accounts)
        //   this.isLoading = false;
        //   if(accounts){
        //     this.rim_accounts = accounts
        //   }else{
        //   }
        // })
        this.deviceWidth = this.mediaQueryService.getDeviceWidth();
        this.deviceWidthListener = this.mediaQueryService.getDeviceWidthListener().subscribe(width => {
            this.deviceWidth = width;
            console.log(width);
        });
        console.log(this.deviceWidth);
        this.getRimAccounts();
    }
    getRimAccounts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            yield this.accountService.getRimAccounts(parseInt(this.authService.getRimNumber()), this.itemsPerPage_accounts, this.currentPage_accounts);
            if (this.accountService.accountsList.length > 0) {
                this.rim_accounts = this.accountService.accountsList;
                this.totalItemsCount_accounts = this.accountService.count;
                this.totalItemsCountChanged_accounts.next(this.totalItemsCount_accounts);
                this.isLoading = false;
            }
        });
    }
    currentAccountPageChanged(currentPage) {
        this.currentPage_accounts = currentPage;
        this.getRimAccounts();
    }
    getAccountDetails(account_no) {
        this.getAcountHistory(account_no);
    }
    getAcountHistory(account_no) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            yield this.historyService.getAccountHistory(account_no, this.itemsPerPage_history, this.currentPage_history);
            if (this.historyService.accountHistoryList.length > 0) {
                this.accountHistoryList = this.historyService.accountHistoryList;
                this.totalItemsCount_history = this.historyService.count;
                this.totalItemsCountChanged_history.next(this.totalItemsCount_history);
                this.isAccountHistoryAvailable = true;
                this.selectedAccount = account_no;
                this.isLoading = false;
            }
            else {
                this.isLoading = false;
            }
        });
    }
    currentHistoryPageChanged(currentPage) {
        this.currentPage_history = currentPage;
        this.getAcountHistory(this.selectedAccount);
    }
    back() {
        this.isAccountHistoryAvailable = false;
        this.selectedAccount = "";
        this.currentAccountPageChanged(1);
    }
    ngOnDestroy() {
        this.deviceWidthListener.unsubscribe();
    }
};
AccountsComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
    { type: src_app_services_history_service__WEBPACK_IMPORTED_MODULE_5__["HistoryService"] },
    { type: src_app_services_media_query_service__WEBPACK_IMPORTED_MODULE_6__["MediaQueryService"] }
];
AccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accounts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accounts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/accounts/accounts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./accounts.component.css */ "./src/app/views/accounts/accounts.component.css")).default]
    })
], AccountsComponent);



/***/ }),

/***/ "./src/app/views/history/history.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/history/history.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n\r\na.disabled {\r\n    pointer-events: none;\r\n    cursor: not-allowed;\r\n    opacity: 0.5;\r\n    /* border: 1px solid rgb(175, 175, 175); */\r\n}\r\n\r\n.pagination {\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.pagination a {\r\n    color: black;\r\n    float: left;\r\n    padding: 8px 16px;\r\n    text-decoration: none;\r\n    border: 1px solid #ddd;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    font-size: 15px;\r\n}\r\n\r\n.pagination a.active {\r\n    background-color: #19547b;\r\n    color: white;\r\n    border: 1px solid #19547b;\r\n}\r\n\r\n.pagination a.active:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.pagination a:hover:not(.active) {\r\n    background-color: #ddd; \r\n    cursor: pointer;\r\n}\r\n\r\n.pagination a:first-child {\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n}\r\n\r\n.pagination a:last-child {\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmEuZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDE3NSwgMTc1LCAxNzUpOyAqL1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4gIFxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuICBcclxuLnBhZ2luYXRpb24gYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NTQ3YjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOTU0N2I7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEuYWN0aXZlOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAgXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAgXHJcbi5wYWdpbmF0aW9uIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcbiAgXHJcbi5wYWdpbmF0aW9uIGE6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/history/history.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/history/history.component.ts ***!
  \****************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/history.service */ "./src/app/services/history.service.ts");




let HistoryComponent = class HistoryComponent {
    constructor(historyService) {
        this.historyService = historyService;
        this.totalItemsCountChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // notify pagination control with total number of items
        this.currentPage = 1; // curent page index
        this.itemsPerPage = 3; // configurable => represent items displayed per page
        this.totalItemsCount = 0;
        this.isLoading = true;
        this.displayedColumns = ['createdAt',
            'transaction',
            'from_account',
            'to_account',
            'from_amount',
            'to_amount'];
    }
    ngOnInit() {
        this.getHistory();
    }
    getHistory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            yield this.historyService.getRimHistory(this.itemsPerPage, this.currentPage);
            if (this.historyService.historyList.length > 0) {
                this.historyList = this.historyService.historyList;
                this.totalItemsCount = this.historyService.count;
                this.totalItemsCountChanged.next(this.totalItemsCount);
                this.isLoading = false;
            }
        });
    }
    currentPageChanged(currentPage) {
        this.currentPage = currentPage;
        this.getHistory();
    }
};
HistoryComponent.ctorParameters = () => [
    { type: src_app_services_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"] }
];
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/history/history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.component.css */ "./src/app/views/history/history.component.css")).default]
    })
], HistoryComponent);



/***/ }),

/***/ "./src/app/views/success/success.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/success/success.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 75%;\r\n}\r\n\r\ni {\r\n    font-size: 150px;\r\n    -webkit-animation: fadeIn 1s ease-in both;\r\n            animation: fadeIn 1s ease-in both;\r\n}\r\n\r\n.check {\r\n    color: green;\r\n}\r\n\r\n.uncheck {\r\n    color: rgb(200, 0, 0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUNBQWlDO1lBQWpDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA3NSU7XHJcbn1cclxuXHJcbmkge1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4gYm90aDtcclxufVxyXG5cclxuLmNoZWNrIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnVuY2hlY2sge1xyXG4gICAgY29sb3I6IHJnYigyMDAsIDAsIDApO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/views/success/success.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/success/success.component.ts ***!
  \****************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/history.service */ "./src/app/services/history.service.ts");




let SuccessComponent = class SuccessComponent {
    constructor(historyService, router, activeRouter) {
        this.historyService = historyService;
        this.router = router;
        this.activeRouter = activeRouter;
    }
    ngOnInit() {
        this.getHistoryByReferenceNumber(this.activeRouter.snapshot.paramMap.get('refNumber'));
    }
    getHistoryByReferenceNumber(referenceNumber) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.historyService.getHistoryByReferenceNumber(referenceNumber);
            if (this.historyService.referenceNumber && this.historyService.referenceNumber != "") {
                this.isValidReferenceNumber = true;
                this.referenceNumber = this.historyService.referenceNumber;
            }
            else {
                this.referenceNumber = "";
                this.isValidReferenceNumber = false;
            }
        });
    }
};
SuccessComponent.ctorParameters = () => [
    { type: src_app_services_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/success/success.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./success.component.css */ "./src/app/views/success/success.component.css")).default]
    })
], SuccessComponent);



/***/ }),

/***/ "./src/app/views/transfers/transfers.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/transfers/transfers.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.btn-transfer {\r\n    /* display: block; */\r\n    /* margin-top: 30px;\r\n    margin-bottom: 55px; */\r\n    /* margin-left: auto;\r\n    margin-right: auto; */\r\n    margin-bottom: 55px;\r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    /* width: 40%; */\r\n    /* background-color: #19547b;\r\n    color: white; */\r\n}\r\n\r\ni.uncheck {\r\n    margin-left: 5px;\r\n    font-size: large;\r\n    color: rgb(200, 0, 0);\r\n    -webkit-animation: fadeIn 0.3s ease-in both;\r\n            animation: fadeIn 0.3s ease-in both;\r\n}\r\n\r\ni.check {\r\n    margin-left: 5px;\r\n    font-size: large;\r\n    color: green;\r\n    -webkit-animation: fadeIn 0.3s ease-in both;\r\n            animation: fadeIn 0.3s ease-in both;\r\n}\r\n\r\ni.none {\r\n    margin-left: 5px;\r\n    font-size: x-large;\r\n    color: #fff;\r\n}\r\n\r\nspan.hint {\r\n    color: rgb(155, 155, 155);\r\n    font-size: small;\r\n}\r\n\r\n/* button.btn-transfer:hover {\r\n    background-color: #2471A3;\r\n    color: white;\r\n} */\r\n\r\n/* input[type=\"text\"]:disabled {\r\n    background: #dddddd;\r\n    background: #f5c6cb;\r\n} */\r\n\r\n.modal-header {\r\n    background-color: #ff5365;\r\n}\r\n\r\n.account_details div{\r\n    -webkit-animation: fadeIn 0.5s ease-in both;\r\n            animation: fadeIn 0.5s ease-in both;\r\n}\r\n\r\n.account_details div:nth-child(2) {\r\n\t-webkit-animation-delay: 0.5s;\r\n\t        animation-delay: 0.5s;\r\n}\r\n\r\n.account_details div:nth-child(3) {\r\n\t-webkit-animation-delay: 1s;\r\n\t        animation-delay: 1s;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdHJhbnNmZXJzL3RyYW5zZmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCOzBCQUNzQjtJQUN0Qjt5QkFDcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCO21CQUNlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsMkNBQW1DO1lBQW5DLG1DQUFtQztBQUN2Qzs7QUFJQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7OztHQUdHOztBQUVIOzs7R0FHRzs7QUFFSDtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7O0FBQ0E7Q0FDQyw2QkFBcUI7U0FBckIscUJBQXFCO0FBQ3RCOztBQUNBO0NBQ0MsMkJBQW1CO1NBQW5CLG1CQUFtQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RyYW5zZmVycy90cmFuc2ZlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5idG4tdHJhbnNmZXIge1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICAvKiBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTVweDsgKi9cclxuICAgIC8qIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgLyogd2lkdGg6IDQwJTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxOTU0N2I7XHJcbiAgICBjb2xvcjogd2hpdGU7ICovXHJcbn1cclxuXHJcbmkudW5jaGVjayB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGNvbG9yOiByZ2IoMjAwLCAwLCAwKTtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbiBib3RoO1xyXG59XHJcblxyXG5cclxuXHJcbmkuY2hlY2sge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW4gYm90aDtcclxufVxyXG5cclxuaS5ub25lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuc3Bhbi5oaW50IHtcclxuICAgIGNvbG9yOiByZ2IoMTU1LCAxNTUsIDE1NSk7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4vKiBidXR0b24uYnRuLXRyYW5zZmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDcxQTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuXHJcbi8qIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGRkZGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVjNmNiO1xyXG59ICovXHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjUzNjU7XHJcbn1cclxuXHJcbi5hY2NvdW50X2RldGFpbHMgZGl2e1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLWluIGJvdGg7XHJcbn1cclxuLmFjY291bnRfZGV0YWlscyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuXHRhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbn1cclxuLmFjY291bnRfZGV0YWlscyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuXHRhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/transfers/transfers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/transfers/transfers.component.ts ***!
  \********************************************************/
/*! exports provided: TransfersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransfersComponent", function() { return TransfersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/transfer.service */ "./src/app/services/transfer.service.ts");
/* harmony import */ var src_app_custome_controls_modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/custome-controls/modal-success/modal-success.component */ "./src/app/custome-controls/modal-success/modal-success.component.ts");
/* harmony import */ var src_app_custome_controls_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/custome-controls/modal-info/modal-info.component */ "./src/app/custome-controls/modal-info/modal-info.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let TransfersComponent = class TransfersComponent {
    constructor(authService, accountService, transferService, modalSuccess, modalInfo, router) {
        this.authService = authService;
        this.accountService = accountService;
        this.transferService = transferService;
        this.modalSuccess = modalSuccess;
        this.modalInfo = modalInfo;
        this.router = router;
        this.currencyChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currencyToChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.amountToChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.toCurrencyChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.fromCurrencyChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoading = false;
        this.from_account_no = "";
        this.from_account_type = "";
        this.from_account_currency = "";
        this.from_account_selected = false;
        this.to_account_no = "";
        this.to_account_type = "";
        this.to_account_currency = "";
        this.to_account_selected = false;
        this.selected_transfer_type_value = -1;
        this.selected_from_account_no_value = "-1";
        this.selected_to_account_no_value = "-1";
        this.description_value = "";
        this.data2 = [];
        this.info_message_title = 'Transfer Details';
        this.info_message_button_text = "Continue";
        this.transfer_succeeded = true;
        this.transfer_error_message = "";
    }
    ngOnInit() {
        // this.isLoading = true;
        // this.accountService.getRimAccounts(parseInt(this.authService.getRimNumber())).subscribe(accounts => {
        //   // console.log(accounts)
        //   this.isLoading = false;
        //   if(accounts){
        //     this.accounts = accounts
        //     //console.log(this.accounts)
        //   }else{
        //   }
        // })
        this.getRimAccounts();
    }
    getRimAccounts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            yield this.accountService.getRimAccounts(parseInt(this.authService.getRimNumber()));
            if (this.accountService.accountsList.length > 0) {
                this.accounts = this.accountService.accountsList;
                this.isLoading = false;
            }
        });
    }
    getAccountFromData(selectedAccount) {
        if (selectedAccount.target.selectedIndex > 0) {
            const selectedccountItem = selectedAccount.target.value;
            const accountItems = selectedccountItem.split('-');
            if (accountItems.length == 2) { // account & currecy
                this.from_account_no = accountItems[0].trim();
                // this.isValidaAccounts(this.from_account_no, this.to_account_no)
                this.from_account_currency = accountItems[1].trim();
                //get remaining data
                const account = this.accounts.filter(account => {
                    return account.account_no == this.from_account_no;
                });
                if (account.length === 1) {
                    this.from_account_type = account[0].account_type;
                    this.from_account_acctual_balance = account[0].actual_balance;
                    this.from_account_available_balance = account[0].available_balance;
                    if (this.from_account_available_balance <= 0) {
                        this.from_account_selected = false;
                        //this.openModal(template)
                        //this.showModal()
                        selectedAccount.target.selectedIndex = 0;
                    }
                    else {
                        this.from_account_selected = true;
                    }
                }
                //notify app-money-field with account currency
                this.currencyChangedSubject.next(this.from_account_currency); // to notify app-money-field that currency has been changed
                this.fromCurrencyChangedSubject.next(this.from_account_currency);
            }
        }
        else {
            this.clearFromAccountFields();
        }
    }
    getAccountToData(selectedAccount) {
        if (selectedAccount.target.selectedIndex > 0) {
            const selectedccountItem = selectedAccount.target.value;
            const accountItems = selectedccountItem.split('-');
            if (accountItems.length == 2) { // account & currecy
                this.to_account_no = accountItems[0].trim();
                this.isValidaAccounts(this.from_account_no, this.to_account_no);
                this.to_account_currency = accountItems[1].trim();
                //get remaining data
                const account = this.accounts.filter(account => {
                    return account.account_no == this.to_account_no;
                });
                if (account.length === 1) {
                    this.to_account_type = account[0].account_type;
                    this.to_account_acctual_balance = account[0].actual_balance;
                    this.to_account_available_balance = account[0].available_balance;
                    this.to_account_selected = true;
                }
                //notify app-money-field with account currency
                this.currencyToChangedSubject.next(this.to_account_currency); // to notify app-money-field that currency has been changed
                this.toCurrencyChangedSubject.next(this.to_account_currency);
            }
        }
        else {
            this.clearToAccountFields();
        }
    }
    isValidaAccounts(from_account_no, to_account_no) {
    }
    clearFromAccountFields() {
        this.from_account_type = "";
        this.from_account_acctual_balance = null;
        this.from_account_available_balance = null;
        this.from_account_currency = "";
        this.currencyChangedSubject.next("");
        this.fromCurrencyChangedSubject.next("");
        this.transfer_amount_value = 0;
        this.from_account_selected = false;
    }
    clearToAccountFields() {
        this.to_account_type = "";
        this.to_account_acctual_balance = null;
        this.to_account_available_balance = null;
        this.to_account_currency = "";
        this.currencyToChangedSubject.next("");
        this.toCurrencyChangedSubject.next("");
        this.to_account_selected = false;
    }
    setAmount(amount) {
        this.transfer_amount_value = amount;
        this.amountToChangedSubject.next(this.transfer_amount_value);
        //console.log(this.transfer_amount)
    }
    setToAmount(amount) {
        this.transfer_amount_to_value = amount;
    }
    transfer(form) {
        //console.log(form)
        if (form.value.transfer_type == -1 ||
            form.value.from_account == "-1" || form.value.to_account == "-1" ||
            this.transfer_amount_value == 0) {
            return;
        }
    }
    transferConfirmed(confirmed, successMessageTemplate) {
        // console.log(confirmed)
        if (confirmed) {
            this.transferService.createTransfer(this.selected_transfer_type_value, this.selected_from_account_no_value.split('-')[0].trim(), this.selected_to_account_no_value.split('-')[0].trim(), this.description_value, this.transfer_amount_value, this.transfer_amount_to_value, this.selected_from_account_no_value.split('-')[1].trim(), this.selected_to_account_no_value.split('-')[1].trim())
                .subscribe(response => {
                if (response.status == "accepted") {
                    console.log(response.refNumber);
                    this.transfer_succeeded = true;
                    this.router.navigate(['/success', response.refNumber]);
                }
                else if (response.status == "rejected") {
                }
            }, error => {
                this.transfer_error_message = error.error.description;
                this.transfer_succeeded = false;
                console.log(error);
            });
        }
    }
    showSuccessMessage(template) {
        this.modalSuccess.openModal(template);
    }
    showInfoMessage(template) {
        this.data2 = [];
        this.data2.push(this.from_account_no);
        this.data2.push(this.to_account_no);
        this.data2.push(this.transfer_amount_value);
        this.data2.push(this.transfer_amount_to_value);
        this.data2.push(new Date().toISOString());
        //console.log(this.data2)
        this.modalInfo.openModal(template);
    }
};
TransfersComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
    { type: src_app_services_transfer_service__WEBPACK_IMPORTED_MODULE_5__["TransferService"] },
    { type: src_app_custome_controls_modal_success_modal_success_component__WEBPACK_IMPORTED_MODULE_6__["ModalSuccessComponent"] },
    { type: src_app_custome_controls_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_7__["ModalInfoComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
TransfersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transfers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transfers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transfers/transfers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transfers.component.css */ "./src/app/views/transfers/transfers.component.css")).default]
    })
], TransfersComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    //api_url: "http://localhost:3000/api"
    api_url: "https://online-banking-pro.herokuapp.com/api" //production
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\Projects\online-banking-demo-v1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map