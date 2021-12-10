import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server! : {id: number, name:string, status:string}
  serverName = '';
  serverStatus = '';

  constructor() { }
 //private serversService : ServersService
  ngOnInit(): void {
  }

}
