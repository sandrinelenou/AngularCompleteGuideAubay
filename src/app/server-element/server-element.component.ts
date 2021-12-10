import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  //@Input() element!: {type :string, name : string, content : string};
  @Input('srvElement') element!: {type :string, name : string, content : string}; //Assigning an Alias to Custom Properties

  constructor() { }

  ngOnInit(): void {
  }

}
