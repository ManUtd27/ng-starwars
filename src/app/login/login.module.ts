import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {ClrCheckboxModule, ClrInputModule, ClrPasswordModule, ClrSelectModule, ClrWizardModule} from '@clr/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ClrSelectModule,
    ClrInputModule,
    ClrPasswordModule,
    ClrCheckboxModule,
    FormsModule,
    ClrWizardModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
