import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {
  lunchList = [];
  myLunchListError ='';

  constructor(
    private myLunchService: MealServiceService
  ) { }

  ngOnInit() {

  this.myLunchService.getLunch()
  .subscribe((myLunchList)=>{
    this.lunchList = myLunchList;

   });
  }
}
