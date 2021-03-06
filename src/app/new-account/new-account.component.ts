import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from '../account/account.model';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

@Output() accountAdded = new EventEmitter<Account>();
  constructor() { }

  onCreateAccount(accountName: string, accountStatus: string){
    this.accountAdded.emit({
      name : accountName,
      status : accountStatus
    });
    console.log('A server status changed, new status: ' + accountStatus);
  }

  ngOnInit(): void {
  }

}
