import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server! : {id: number, name:string, status:string}
  serverName = '';
  serverStatus = '';

  constructor(private serversService : ServersService,
              private route : ActivatedRoute) { }
 //private serversService : ServersService
  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    //this.route.snapshot.queryParams.subscribe();
    this.route.fragment.subscribe();
    //this.server = this.serversService.getServer(this.server.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer(){
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
