import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class MediaQueryService {

    private deviceWidth = 1200;

    private deviceWidthListener = new Subject<number>();

    constructor(private breakpointObserver: BreakpointObserver) { }

    startSubscripbeForBreakpoint(){
        this.breakpointObserver
        .observe(['(min-width: 466px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.deviceWidth = 1200;
            this.deviceWidthListener.next(1200);
            // console.log('1200px')
          } else {
            this.deviceWidth = 465;
            this.deviceWidthListener.next(465);
            // console.log('400px')
          }
        });
    }

    getDeviceWidthListener(){
      return this.deviceWidthListener;
    }

    getDeviceWidth(){
      return this.deviceWidth;
    }
}