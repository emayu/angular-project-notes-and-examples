import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input("likesCount") likesCount:number;
  @Input("isActive") isActive:boolean;

  constructor() { 
    
  }

  onClick(){
    this.isActive = !this.isActive;
    if(this.isActive){
      this.likesCount++;
    }else{
      this.likesCount--;
    }
  }
}
