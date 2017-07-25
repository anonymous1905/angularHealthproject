import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MealServiceService {
  BASE_URL: string = 'http://localhost:3000';
    constructor(private myHttp: Http) {}

    getBreakfast() {
     return this.myHttp.get(`${this.BASE_URL}/api/breakfast`)
       .map((res) => res.json());
   }

   getLunch() {
    return this.myHttp.get(`${this.BASE_URL}/api/lunch`)
      .map((res) => res.json());

  }
  getDinner() {
   return this.myHttp.get(`${this.BASE_URL}/api/dinner`)
     .map((res) => res.json());
 }

}
