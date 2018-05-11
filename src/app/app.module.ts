import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzSelectModule, MzRadioButtonModule, MzCheckboxModule } from 'ng2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventService } from './api/event.service';
import { UserService } from './api/user.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { OpenEventComponent } from './open-event/open-event.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { AdminService } from './api/admin.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { SetCreateComponent } from './set-create/set-create.component';
import { SetService } from './api/set.service';
// import { FileSelectDirective } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    EventCreateComponent,
    OpenEventComponent,
    UserAccountComponent,
    EventDetailsComponent,
    SetCreateComponent,
    FileSelectDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MzSelectModule,
    MzRadioButtonModule,
    MzCheckboxModule,
    FormsModule
  
  ],
  providers: [
    EventService,
    UserService,
    AdminService,
    SetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
