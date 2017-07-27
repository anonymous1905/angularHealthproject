import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-weekplan',
  templateUrl: './weekplan.component.html',
  styleUrls: ['./weekplan.component.css']
})
export class WeekplanComponent implements OnInit {

  weeklyList = [];
  myBreakfastListError ='';

  constructor(
    private myWeeklyService: MealServiceService
  ) { }

  ngOnInit() {
    // this.myWeeklyService.getOneOfEach()
    // .subscribe((myWeeklyList)=>{
    //   this.weeklyList = myWeeklyList;
    //
    // });
  }
}
