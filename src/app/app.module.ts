import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploader } from 'ng2-file-upload';
import { FileSelectDirective } from 'ng2-file-upload';


import { AuthServiceService} from './auth-service.service';
import { MealServiceService } from './meal-service.service';
import { WebsiteService } from './website.service';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUp2Component } from './sign-up2/sign-up2.component';
import { WeekplanComponent } from './weekplan/weekplan.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LogInComponent } from './log-in/log-in.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { AddmealsComponent } from './addmeals/addmeals.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignUp2Component,
    WeekplanComponent,
    BreakfastComponent,
    LogInComponent,
    LunchComponent,
    DinnerComponent,
    AddmealsComponent,
    FileSelectDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    WebsiteService,
    MealServiceService,
    AuthServiceService,

  ],
  bootstrap: [AppComponent],
})


export class AppModule { }
