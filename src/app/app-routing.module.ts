import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { AddmealsComponent } from './addmeals/addmeals.component';
import { ScheduleComponent } from './schedule/schedule.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path:'breakfast',
    component: BreakfastComponent
  },
  {
    path:'lunch',
    component: LunchComponent
  },
  {
    path:'dinner',
    component: DinnerComponent
  },
  {
    path:'addmeal',
    component: AddmealsComponent
  },
  {
    path:'weekplan',
    component: ScheduleComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
