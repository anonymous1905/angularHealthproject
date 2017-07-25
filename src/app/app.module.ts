import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MealServiceService } from './meal-service.service';
import { WebsiteService } from './website.service';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUp2Component } from './sign-up2/sign-up2.component';
import { WeekplanComponent } from './weekplan/weekplan.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignUp2Component,
    WeekplanComponent,
    BreakfastComponent,
    LogInComponent
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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
