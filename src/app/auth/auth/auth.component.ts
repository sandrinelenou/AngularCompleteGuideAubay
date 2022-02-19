import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm!: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode; //false
  }

  onSubmit(form:NgForm){

    console.log(form.value);
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoginMode){
      //signin...
    }else{
      //signup
      this.authService.signup(email, password).subscribe(
        (resData) => {
          console.log(resData);
        },
        (err) => {
          console.log(err);
        }
      );
      form.reset; //svuota i campi del form
    }
  } //fin onsubmit

}
