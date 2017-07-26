
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WebsiteService } from  '../website.service';

@Component({
  selector: 'app-sign-up2',
  templateUrl: './sign-up2.component.html',
  styleUrls: ['./sign-up2.component.css']
})
export class SignUp2Component implements OnInit {
  isLoggedOut: boolean = false;

  fullNameValue: string;
  emailValue: string;
  passwordValue: string;
  usernameValue: string;

  errorMessage: string;

  loginEmail: string;
  loginPassword: string;

  loginErrorMessage: string;


  constructor(
    private authThang: WebsiteService ,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.authThang.checklogin()
      // If success, we are logged in.
      .then((resultFromApi) => {

      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch((err) => {
          this.isLoggedOut = true;
      });
  }

  doSignUp() {
    console.log("lucky");
    this.authThang.signup(this.fullNameValue, this.emailValue, this.passwordValue)
      .then((resultFromApi) => {
          // clear form
          this.fullNameValue = "";
          this.emailValue = "";
          this.usernameValue = "";
          this.passwordValue = "";

          // clear error message
          this.errorMessage = "";
          // redirect to /camels

      })
      .catch((err) => {
          const parsedError = err.json();
          this.errorMessage = parsedError.message + ' 😤';
      });
  } // close doSignUp()

  doLogin() {
    this.authThang.login(this.loginEmail, this.loginPassword)
      .then((resultFromApi) => {
          // clear the form
          this.loginEmail = "";
          this.loginPassword = "";

          // clear the error message
          this.loginErrorMessage = "";

          // redirect to /camels']);
      })
      .catch((err) => {
          const parsedError = err.json();
          this.loginErrorMessage = parsedError.message + ' 😤';
      });
  } // close doLogin()

}
