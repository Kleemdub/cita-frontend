import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SetCreateComponent } from './set-create/set-create.component';
import { ArenaComponent } from './arena/arena.component';
import { RoundComponent } from './round/round.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'arena', component: ArenaComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'user/:userId', component: UserAccountComponent },
  { path: 'event/create', component: EventCreateComponent },
  { path: 'event/:eventId', component: EventDetailsComponent },
  { path: 'archives/event/:eventId/round/:roundId', component: RoundComponent },
  { path: 'set/event/:eventId/round/:roundId/user/:userId', component: SetCreateComponent }

  // Handle all other urls (MUST BE LAST)
  // { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
