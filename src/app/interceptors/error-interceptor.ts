import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError } from 'rxjs/internal/operators/catchError';
import { MatDialog } from "@angular/material";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { DialogErrorComponent } from "../custome-controls/dialog-error/dialog-error.component";

@Injectable()//because i will inject MatDialog in this interceptor constructor
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private dialog: MatDialog){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = "Internal server error!";
                console.log("error",error)
                if(error.error.errorDescription){
                    errorMessage = error.error.errorDescription;
                }
                this.dialog.open(DialogErrorComponent, {data:{message: errorMessage, title: "Internal server error"}});
                return throwError(error);
            })
        )
    }
}