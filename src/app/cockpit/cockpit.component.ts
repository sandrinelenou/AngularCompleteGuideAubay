import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class CockpitComponent implements OnInit {

  newServerName : string  = '';
  newServerContent:string = '';
  serverElements: any  = [] ;

  @Output() cockpitstart : EventEmitter<any> = new EventEmitter();
  @Output() serverCreated = new EventEmitter<{type: 'server',serverName : string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{type: 'blueprint', serverName : string, serverContent: string }>();

  @ViewChild('serverContentInput', {static:true}) serverContentInput! : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  startCockpit(){
    //this.cockpitstart.emit(' init start cockpit');
    this.cockpitstart.emit({title: 'emit title ',time: new Date() });
  }

  //local references in template
  onAddServer(nameInput: HTMLInputElement){
    //console.log(nameInput.value);
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      type: 'server',
      serverName :nameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
   }

  onAddServer2(){
    this.serverCreated.emit({
      type: 'server',
      serverName :this.newServerName,
      serverContent : this.newServerContent
    });
   }

   onAddBlueprint(nameInput: HTMLInputElement){
    this.bluePrintCreated.emit({
      type: 'blueprint',
      serverName :nameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
   }

  /*onAddBlueprint(nameInput: HTMLInputElement){
    this.bluePrintCreated.emit({
      type: 'blueprint',
      serverName :this.newServerName,
      serverContent : this.newServerContent
    });
   }*/

}
function viewChild(arg0: string) {
  throw new Error('Function not implemented.');
}

