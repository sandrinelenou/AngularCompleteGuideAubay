import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [
    {
      id: 1,
      name: 'TestServer',
      status: 'online'

    },
    {
      id: 2,
      name: 'DevServer',
      status: 'offline'
    },
    {
      id: 3,
      name: 'ProductionServer',
      status: 'offline'
    },
];

  constructor() { }

  ngOnInit(): void {
  }

  onReload(){

  }

}
