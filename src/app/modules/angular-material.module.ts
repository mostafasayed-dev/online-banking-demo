
import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatTableModule } from '@angular/material';


@NgModule({
    //a feature which angular offer in case you exporting and importing the same modules
    //import will be done automatically by angular without need to export them
    exports:[ 
        MatCardModule,
        MatTableModule,
        MatDividerModule ]//to be able to exports in another module
})
export class AngularMaterialModule{}