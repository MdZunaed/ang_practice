import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginData: any;

  printCredential(form:NgForm){
    this.loginData=form;
    console.log(this.loginData);
  }

  //// signal form ////
  loginModel=signal<loginData>({
    email: '',
    password: ''
  });
  loginForm= form(this.loginModel, (field)=>{
    required(field.email, {message: 'Email is required'});
    required(field.password, {message: 'Password is required'});
    minLength(field.password, 5, {message: 'Password should be minimum 5 characters'})
  
  });

  login(){
    console.log("Email: ",this.loginForm.email().value());
    console.log("Password: ",this.loginForm.password().value());
  }
  resetLoginForm(){
    this.loginForm.email().value.set('');
    this.loginForm.password().value.set('');
  }
}

interface loginData{
   email: string;
  password: string;
}

