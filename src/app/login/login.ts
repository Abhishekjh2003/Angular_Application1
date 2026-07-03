import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
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
      }
      else
      {
          alert("Invalid Username or Password");
          console.log("Invalid Credentials ");
      }

  }
  loginForm = new FormGroup({
  username: new FormControl('',[
    Validators.required,
    Validators.minLength(3)]),
  password: new FormControl('',[Validators.required,Validators.minLength(5)])
});

}
  