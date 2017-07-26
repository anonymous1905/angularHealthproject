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

  constructor(
    private myaddBreakfastService: MealServiceService
  ) { }

  ngOnInit() {
    this.myaddBreakfastService.postBreakfast()
    .subscribe((myaddBreakfastList)=>{
      this.breakfastList = myaddBreakfastList;

    });
  }

  }
