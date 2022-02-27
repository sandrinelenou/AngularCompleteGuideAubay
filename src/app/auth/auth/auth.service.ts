import { catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';


export interface authResponseData{
  kind : string,
  idToken	: string,
  email	: string,
  refreshToken : string	,
  expiresIn : string,
  localId : string,
  registered ? : boolean; // ? per indicare che questa variabile è facoltativa , infatti lo produce solo nella risposta del login
}

@Injectable({
  providedIn:'root'
})
export class AuthService{
  //store the authentication user, store as a subject per gestire utente
  user = new Subject<User>(); //questo informera lo stato dell'user

  constructor(private http: HttpClient) { }

   //se non abbiamo error nella risposta di authenticazione abbiamo il token di cui abbiamo bisogno per utente
  signup(email:string, password:string){
     return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDk33sRgJNAdiCRmmjTGynNuaELagsmT5o',
     {email:email,
      password:password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError),
      tap((resData) => {
       this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
      })
    );
    //tap esegue alcuni azioni senza modificare la risposte
  }


  login(email:string, password: string){
    return this,this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDk33sRgJNAdiCRmmjTGynNuaELagsmT5o', {
      email:email,
      password:password,
      returnSecureToken: true
    }
    ).pipe(catchError(this.handleError),
    tap((resData) => {
      this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
     }));
  }


  private handleAuthentication(email:string,userId:string, token:string, expiresIn:number){
    const expirationDate = new Date(
      new Date().getTime() + +expiresIn*1000
    ); // getTime() calcule La durée écoulée en millisecondes, + devant resData.expiresIn*1000 converti en nombre,*1000 converti en miliseconde
    //ci restituisce l'utente authenticato con i dati dal backend con la data di scadenza
      const user = new User(email, userId, token, expirationDate);
    // ora possiamo usare l'ogette per l'utente successivo o emetterlo come il nostro utente attualmente connesso
      this.user.next(user);
  }


  private handleError( errorRes : HttpErrorResponse){
    let errorResp= 'An unkwon error accured';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorResp);
    }
    switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorResp = 'This email exixts already';
        break;
      case 'OPERATION_NOT_ALLOWED' :
        errorResp = 'Password sign-in is disabled for this project';
         break;
      case 'INVALID_PASSWORD' :
       errorResp = 'The password is invalid .';
          break;
      case 'EMAIL_NOT_FOUND' :
            errorResp = 'This email does not exixts.';
               break;
    }
    return throwError(errorResp);
  }

}
