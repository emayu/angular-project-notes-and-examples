import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input("title") title;
  isCollapsed:boolean;
  
  constructor() { 
    console.log("constructor",this.title);
  }

  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }

}