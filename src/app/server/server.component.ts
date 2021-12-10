import { getCurrencySymbol } from "@angular/common";
import { Component } from "@angular/core";
import { ITS_JUST_ANGULAR } from "@angular/core/src/r3_symbols";

@Component({
  selector:'app-server',
  templateUrl: './server.component.html',
  styleUrls:['./server.component.css']
})

export class  ServerComponent{

  title:string = 'ITS_JUST_ANGULAR';
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "";
  serverCreated= false;
  serverStatus:string = 'offline';
  serverId= 10;
  servers = ['TestServer','TestServer 2','TestServer 3'];

  newServerName  = '';
  newServerContent = '';
  serverElements: any  = [];

  showSecret: boolean = false;
  log : any = [];

  constructor(){
    setTimeout( () =>{
      this.allowNewServer = true;
    },3000);

   this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

   ngOnInit(){

   }

   onCreateServer(){
     this.serverCreated = true;
     this.servers.push(this.serverName);
     this.serverCreationStatus = "Server was created! " + this.serverName;
   }

   onUpdateServerName(event :Event){
    console.log(event);
    this.serverName =(<HTMLInputElement>event.target).value;
   }

   getServerStatus(){
     return this.serverStatus;
   }

   getColor(){
    return this.serverStatus === 'online'? 'green' : 'yellow';
   }

   onToogleDetails(){
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
   }

   onAddServer(){
     this.servers.push('Another Server');
   }

   onRemoveServer(id : number){
     const position = id ;
     this.servers.splice(position, 1);
   }


}
