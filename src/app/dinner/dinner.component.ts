import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealServiceService } from '../meal-service.service';


@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {
  dinnerList = [];
  myDinnerListError ='';

  constructor(
    private myDinnerService: MealServiceService
  ) { }

  ngOnInit() {
this.myDinnerService.getDinner()
  .subscribe((myDinnerList)=>{
    this.dinnerList = myDinnerList;

   });
  }
}
