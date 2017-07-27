import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MealServiceService {
  BASE_URL: string = 'http://localhost:3000';

  name: string;
  calories:string;
  image:string;
    constructor(private myHttp: Http) {}

    getBreakfast() {
     return this.myHttp.get(`${this.BASE_URL}/api/breakfast`, {withCredentials: true})
       .map((res) => res.json());
   }

   getLunch() {
    return this.myHttp.get(`${this.BASE_URL}/api/lunch`,{withCredentials: true})
      .map((res) => res.json());

  }
  getDinner() {
   return this.myHttp.get(`${this.BASE_URL}/api/dinner`,{withCredentials: true})
     .map((res) => res.json());
 }

 postBreakfast(breakfastName, breakfastCalories, breakfastImage) {
   return this.myHttp
   .post(`${this.BASE_URL}/api/breakfast`,

  {
     breakfastName: breakfastName,
     breakfastCalories:breakfastCalories,
     breakfastImage:breakfastImage,
   },


     {withCredentials: true}
   )
   .map((res) => res.json());
 }
 postLunch(lunchName, lunchCalories, lunchImage) {
   return this.myHttp
   .post(`${this.BASE_URL}/api/lunch`,

  {
     lunchName: lunchName,
     lunchCalories:lunchCalories,
     lunchImage:lunchImage,
   },


     {withCredentials: true}
   )
   .map((res) => res.json());
 }



 postDinner(dinnerName, dinnerCalories, dinnerImage) {
   return this.myHttp
   .post(`${this.BASE_URL}/api/dinner`,

  {
     dinnerName: dinnerName,
     dinnerCalories:dinnerCalories,
     dinnerImage:dinnerImage,
   },


     {withCredentials: true}
   )
   .map((res) => res.json());
 }


 }
