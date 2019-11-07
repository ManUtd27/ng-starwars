import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import {ClrIconModule, ClrNavigationModule} from '@clr/angular';
import { TableComponent } from './landing/table/table.component';


@NgModule({
  declarations: [LandingComponent, TableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ClrIconModule,
    ClrNavigationModule
  ]
})
export class HomeModule { }
