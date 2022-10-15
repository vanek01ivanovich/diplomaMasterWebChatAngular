import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardService} from "./service/dashboard.service";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./auth/auth-interceptor";
import { AuthenticationComponent } from './authentication/authentication.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { FriendsComponent } from './friends/friends.component';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatComponent } from './chat/chat.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { HeaderComponent } from './header/header.component';
import { AddQuizComponent } from './quiz/add-quiz/add-quiz.component';
import { SearchUserProfileComponent } from './user-profile/search-user-profile/search-user-profile.component';
import { EditUserProfileComponent } from './user-profile/edit-user-profile/edit-user-profile.component';
import { ViewUserProfileComponent } from './user-profile/view-user-profile/view-user-profile.component';
import { CreateUserProfileComponent } from './user-profile/create-user-profile/create-user-profile.component';
import { ProfileListComponent } from './user-profile/profile-list/profile-list.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthenticationComponent,
    UsersComponent,
    AddUsersComponent,
    FriendsComponent,
    SettingsComponent,
    UserProfileComponent,
    QuizComponent,
    MainMenuComponent,
    NotificationsComponent,
    ChatComponent,
    MainPageComponent,
    AnnouncementComponent,
    HeaderComponent,
    AddQuizComponent,
    SearchUserProfileComponent,
    EditUserProfileComponent,
    ViewUserProfileComponent,
    CreateUserProfileComponent,
    ProfileListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
  providers: [
    DashboardService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
