import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from './account.model';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

@Input() account! : Account;
@Input() id!: number ;
@Output() statusChanged = new EventEmitter<{id : number, newStatus: string}>();

  constructor() { }

  onSetTo(status: string){
    this.statusChanged.emit({
      id: this.id,
      newStatus: status
    });
    console.log('A server status changed, new status: ' +status);
  }

  ngOnInit(): void {
  }

}
