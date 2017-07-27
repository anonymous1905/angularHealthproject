import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  weeklyList = [];
  myBreakfastListError ='';


  breakfastArray = [];
  lunchArray =[];
  dinnerArray = [];

  constructor(
    private myWeeklyService: MealServiceService
  ) { }

  ngOnInit() {
    this.getOneOfEach();
  //   this.myWeeklyService.getOneOfEach()
  //   .then((myWeeklyList)=>{
  //     this.weeklyList = myWeeklyList;
  //   });
}

getOneOfEach() {
  let randomItems = [];
  function getRandomNumber(arrayLength) {
    return Math.floor(Math.random()*arrayLength);
  }
  this.myWeeklyService.getBreakfast()
    .subscribe((array) => {
      console.log(array+ "aleluia");
      const randomIndex = getRandomNumber(array.length);
      randomItems.push(array[randomIndex]);
      array = this.breakfastArray

    })

  this.myWeeklyService.getLunch()
    .subscribe((array) => {
      console.log(array);
      const randomIndex = getRandomNumber(array.length);
      randomItems.push(array[randomIndex]);
    })

  this.myWeeklyService.getDinner()
    .subscribe((array) => {
      console.log(array);
      const randomIndex = getRandomNumber(array.length);
      randomItems.push(array[randomIndex]);
      this.weeklyList = randomItems;
    })

  }
}
