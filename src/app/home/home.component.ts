import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  serverElements = [
    {type : 'server', name : 'TestServer', content : 'just a test server'},
    {type : 'blueprint', name : 'TestBlueprint', content : 'just a test Blueprint'}
  ];
 // title = 'AngularCompleteGuideAubay';
 time!  : number;  num : number = 0 ;
 oddNumbers : number[] = [] ;
 evenNumbers : number[] = [];
 title : string = 'app output work';
 cockpitTitle! : string;
 loadedFeature = 'recipe';  //which navigation item
 numbers : number[] = [1, 2, 3 ,4, 5] ;
 oddNumber: number[] = [1,3,5];
 evenNumber: number[] = [2,4];
 onlyOdd = false;
 value : number = 10;
 accounts = [
   {
     name: 'Master Account',
     status: 'active'
   },
   {
    name: 'Test Account',
    status: 'inactive'
  },
  {
    name: 'Hidden Account',
    status: 'unknown'
  }
 ];
 onAccountAdded(newAccount: {name:string, status:string}){
  this.accounts.push(newAccount);
 }
 onStatusChanged(updateInfos : {id: number, newStatus : string }){
   this.accounts[updateInfos.id].status = updateInfos.newStatus;
 }

 // choose item navigation to display
 onNavigate(featureNavigate: string){
  this.loadedFeature = featureNavigate;
 }


onGameControlAdd(increamentedNum : number){
  //console.log(increamentedNum);
 if(increamentedNum % 2 === 0){
   this.evenNumbers.push(increamentedNum);
 }
 else{
   this.oddNumbers.push(increamentedNum);
 }

}

 prepareCockpit(event : any){
   //console.log(event);
   this.time = event.time,
   this.cockpitTitle = event.title;
 }

  onServerAdded(serverData : {type: string, serverName : string, serverContent: string }){
  this.serverElements.push({
    type:'server',
    name: serverData.serverName,
    content:serverData.serverContent
  });
 }

 onBlueprintAdded(blueData : {type:string, serverName : string, serverContent: string }){
  this.serverElements.push({
    type:'blueprint',
    name: blueData.serverName,
    content:blueData.serverContent
  });
 }

/*oddNumberStart() {
  this.num = Math.round(Math.random() * 100);
  return this.num;
}
*/


}



