import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { MaterializeModule } from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MzButtonModule, MzInputModule } from 'ng2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventService } from './api/event.service';
import { UserService } from './api/user.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MaterializeModule
    BrowserAnimationsModule,
    // MzButtonModule
    FormsModule
  ],
  providers: [
    EventService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
