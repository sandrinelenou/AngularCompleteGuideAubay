import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  //@Output() cockpitstart : EventEmitter<any> = new EventEmitter();  Output lets the child send data to a parent component.
  @Output() gameStartEvent  = new EventEmitter<number>(); //create event to send to parent
  @Output() oddNumberStart : EventEmitter<any> = new EventEmitter();
  interval : any;
  val : number = 0 ;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
      this.interval = setInterval( () =>{
        this.gameStartEvent.emit(
       //console.log(i++)
       this.val +1
        );
        this.val ++;
    }, 1000);
  }

  stopGame(){
      clearInterval(this.interval);
  }

  pauseControl(){
    clearInterval(this.interval);
  }

}
