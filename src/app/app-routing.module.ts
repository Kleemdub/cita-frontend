import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EventCreateComponent } from './event-create/event-create.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },

  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },

  { path: 'event/create', component: EventCreateComponent }

  // { path: 'phones', component: PhoneListComponent },

  // { path: 'phone/:phoneId', component: PhoneDetailsComponent },

  // Handle all other urls (MUST BE LAST)
  // { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
