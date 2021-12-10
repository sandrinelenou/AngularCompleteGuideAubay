import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  //@Input() lets a parent component update data in the child component.pass data from outside into this component
  @Input() number!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
