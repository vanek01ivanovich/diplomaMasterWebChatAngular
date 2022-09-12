import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AddUsersComponent} from "./add-users/add-users.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: AuthenticationComponent},
  { path: 'create', component: AddUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
