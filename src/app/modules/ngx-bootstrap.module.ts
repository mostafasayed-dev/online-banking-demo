import { NgModule } from '@angular/core';
import { AlertConfig, AlertModule }  from 'ngx-bootstrap/alert'
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsModalService, ModalModule }  from 'ngx-bootstrap/modal'
import { PaginationConfig, PaginationModule}  from 'ngx-bootstrap/pagination'
import { PositioningService } from 'ngx-bootstrap/positioning';

@NgModule({
  exports: [
    AlertModule,
    ModalModule,
    PaginationModule 
  ],
  providers: [ AlertConfig, 
               PaginationConfig,
               BsModalService, 
               ComponentLoaderFactory, 
               PositioningService //Modals
            ]
})
export class NgxBootstrapModule { }
