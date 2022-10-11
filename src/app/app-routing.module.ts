import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AddUsersComponent} from "./add-users/add-users.component";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {AnnouncementComponent} from "./announcement/announcement.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {FriendsComponent} from "./friends/friends.component";
import {ChatComponent} from "./chat/chat.component";
import {SettingsComponent} from "./settings/settings.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {QuizComponent} from "./quiz/quiz.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'login', component: AuthenticationComponent},
  { path: 'create', component: AddUsersComponent},
  { path: 'menu', component: MainMenuComponent},
  { path: 'feed', component: AnnouncementComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'friends', component: FriendsComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'notifications', component: NotificationsComponent},
  { path: 'quiz', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
