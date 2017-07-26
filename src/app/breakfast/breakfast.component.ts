import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfastList = [];
  myBreakfastListError ='';

  constructor(
    private myBreakfastService: MealServiceService
  ) { }

  ngOnInit() {
    this.myBreakfastService.getBreakfast()
    .subscribe((myBreakfastList)=>{
      this.breakfastList = myBreakfastList;

    });
  }

}
