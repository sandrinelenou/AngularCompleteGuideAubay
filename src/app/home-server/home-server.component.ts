import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home-server',
  templateUrl: './home-server.component.html',
  styleUrls: ['./home-server.component.css']
})
export class HomeServerComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

onLoadServer(id:number){
  this.route.navigate(['/servers',id,'edit'], {queryParams: {allowEdit : '1'}, fragment : 'loading'});
}


}
