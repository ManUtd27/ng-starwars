import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import {ClrDatagridModule, ClrIconModule, ClrNavigationModule} from '@clr/angular';
import { TableComponent } from './landing/table/table.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LandingComponent, TableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ClrIconModule,
    ClrNavigationModule,
    ClrDatagridModule
  ]
})
export class HomeModule { }
