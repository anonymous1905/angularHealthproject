import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
isLoggedOut: boolean = false;
fullNameValue: string;
  emailValue: string;
  passwordValue: string;

  errorMessage: string;

  loginEmail: string;
  loginPassword: string;

  loginErrorMessage: string;


  constructor(
    private authThang: AuthServiceService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.authThang.checklogin()
      // If success, we are logged in.
      .then((resultFromApi) => {
          this.isLoggedOut = false;
          this.routerThang.navigate(['']);
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch((err) => {
          this.isLoggedOut = true;
      });
  }
  doSignUp() {
    this.authThang.signup(this.fullNameValue, this.emailValue, this.passwordValue)
      .then((resultFromApi) => {
          // clear form
          this.fullNameValue = "";
          this.emailValue = "";
          this.passwordValue = "";

          // clear error message
          this.errorMessage = "";

          // redirect to /camels
          this.routerThang.navigate(['']);
      })
      .catch((err) => {
          const parsedError = err.json();
          this.errorMessage = parsedError.message + ' 😤';
      });
  } // close doSignUp()

  doLogin() {
    console.log('doing the login');
    this.authThang.login(this.loginEmail, this.loginPassword)
      .then((resultFromApi) => {
          // clear the form
          this.loginEmail = "";
          this.loginPassword = "";

          // clear the error message
          this.loginErrorMessage = "";

          // redirect to /camels
          
      })
      .catch((err) => {
        console.log('fuck');
          const parsedError = err.json();
          this.loginErrorMessage = parsedError.message + ' 😤';
      });
  } // close doLogin()

}
