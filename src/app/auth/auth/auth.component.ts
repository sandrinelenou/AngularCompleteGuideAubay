import { Router } from '@angular/router';
import { AuthService, authResponseData } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm!: NgForm;
  errorMessage!: string ;
  successMessage! :string  ;
  isLoading : boolean = false;
  authObs!: Observable<authResponseData>;


  constructor(private authService: AuthService,
              private router: Router) { }

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

   let authObs : Observable<authResponseData>;  //variabile di tipo observable chi produira i dati di tipo authResponseData

    this.isLoading= true;
    if(this.isLoginMode){
      //signin...
      this.authObs = this.authService.login(email, password);

    }else{
      //signup
      this.authObs = this.authService.signup(email, password);
        form.reset; //svuota i campi del form
    }


    this.authObs.subscribe(
      (resData: any) => {
        this.successMessage = 'success login';
        this.successMessage = this.successMessage;
        console.log(resData);
        this.isLoading = false;
         return this.router.navigate(['/recipes']);
      },
      (errorRes: any) => {
        this.errorMessage = errorRes;
        this.isLoading= false;
      }
    );

  } //fin onsubmit

}
