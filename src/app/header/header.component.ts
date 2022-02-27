import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth/auth.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Recipe } from "../recipes/recipes.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{

  private userSub!: Subscription; // serve per annulare l'inscrizione se non è piu richiesta
  isAuthenticated!: boolean;
  constructor( private authService:AuthService){

  }


 @Output() recipeSelected = new EventEmitter<string>();  // send data from child to parent

  onSelect(recipeData: string){
   this. recipeSelected.emit(recipeData);
  }

  ngOnInit(){
    //impostare un abonamento per questo utente del servizio di authenticazione
    this.userSub = this.authService.user.subscribe( user => {
       //controllo per sapere se esiste un utente authenticato o non
     // this.isAuthenticated = !user ? false : true ; // this.isAuthenticated = !!user  ;
     this.isAuthenticated = !!user  ;
     console.log(!user);
     console.log(!!user);
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
