import { Component, OnInit } from '@angular/core';
import { MealServiceService } from '../meal-service.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfastList = [];

  constructor(private myBreakfastService: MealServiceService) { }

  ngOnInit() {
    this.myBreakfastService.getBreakfast()
    .subscribe((myBreakfastList)=>{
      this.breakfastList = myBreakfastList;
    });


  }

}
