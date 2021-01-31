import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MediaQueryService } from './services/media-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private mediaQueryService: MediaQueryService) {}

  ngOnInit(): void {
    this.mediaQueryService.startSubscripbeForBreakpoint();
    this.authService.autoAuthenticateUser();
  }
  //title = 'online-banking-demo-v1';
}
