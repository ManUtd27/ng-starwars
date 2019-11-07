import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import {LoginModule} from './login/login.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import * as fromLogin from './reducers/login-page.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HomeModule,
    LoginModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({login: fromLogin.reducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
