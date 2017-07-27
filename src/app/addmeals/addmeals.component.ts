import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { MealServiceService } from '../meal-service.service';


@Component({
  selector: 'app-addmeals',
  templateUrl: './addmeals.component.html',
  styleUrls: ['./addmeals.component.css']
})
export class AddmealsComponent implements OnInit {

  breakfastList = [];
  myBreakfastListError ='';
  breakfastName = '';
  breakfastCalories ='';
  breakfastImage = '';

  lunchList = [];
  lunchName = '';
  lunchCalories ='';
  lunchImage = '';

  dinnerList = [];
  dinnerName = '';
  dinnerCalories = '';
  dinnerImage = '';

  constructor(
    private myaddBreakfastService: MealServiceService,
    private myaddLunchService:MealServiceService,
    private myaddDinnerService:MealServiceService

  ) { }

  ngOnInit() {

}


  saveNewMeal() {
    this.myaddBreakfastService.postBreakfast(this.breakfastName, this.breakfastCalories, this.breakfastImage)
    .subscribe((myaddBreakfastList)=>{
      this.breakfastList = myaddBreakfastList;

  });

  }
  saveNewMeal1() {
    this.myaddLunchService.postLunch(this.lunchName, this.lunchCalories, this.lunchImage)
    .subscribe((myaddLunchList)=>{
      this.lunchList = myaddLunchList;

  });

  }
  saveNewMeal2() {
    this.myaddDinnerService.postDinner(this.dinnerName, this.dinnerCalories, this.dinnerImage)
    .subscribe((myaddDinnerList)=>{
      this.dinnerList = myaddDinnerList;

  });

  }
}
