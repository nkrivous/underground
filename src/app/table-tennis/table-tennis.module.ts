import { TableTennisComponent } from './table-tennis.component';
import { TableTennisRoutingModule } from './table-tennis.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    TableTennisRoutingModule
  ],
  declarations: [
    TableTennisComponent
  ]
})
export class TableTennisModule { }
