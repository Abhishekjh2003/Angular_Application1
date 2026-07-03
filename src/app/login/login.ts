import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector : 'app-login',
  imports : [ReactiveFormsModule],
  templateUrl : './login.html',
  styleUrl : './login.scss',
})
export class Login {
    constructor(private router: Router) {}
  login()
  {
      const username ="admin";
      const password ="admin123"

      if(this.loginForm.value.username===username && 
         this.loginForm.value.password===password
      )
      {
        alert("Login Successfull");
        console.log("logged in");
        this.router.navigate(['/dashboard']);
      }
      else
      {
          alert("Invalid Username or Password");
          console.log("Invalid Credentials ");
      }

  }
  loginForm = new FormGroup({
  username : new FormControl('',[
    Validators.required,
    Validators.minLength(3)]),
  password : new FormControl('',[Validators.required,Validators.minLength(5)])
});

}
