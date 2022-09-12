import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardService} from "./service/dashboard.service";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./auth/auth-interceptor";
import { AuthenticationComponent } from './authentication/authentication.component';
import {FormsModule} from "@angular/forms";
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthenticationComponent,
    UsersComponent,
    AddUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DashboardService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
