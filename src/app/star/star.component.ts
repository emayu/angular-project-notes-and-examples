import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'star',
  template: `
      <svg (click)="onClick()" class="bi" width="32" height="32" fill="currentColor">
        <use [attr.xlink:href]="iconRef"/>
      </svg>
  `
})


export class StarComponent implements OnInit {


  
  @Input('isSelected') isSelected : boolean;
  @Output() change = new EventEmitter();

  readonly iconRefBase="bootstrap-icons.svg#";
  iconRef : String;

  constructor(){}
  
  ngOnInit(){
    this.iconRef = this.currentIcon();
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.iconRef = this.currentIcon();
    this.change.emit({ newValue : this.isSelected });
  }

  private currentIcon(){
    return this.iconRefBase + (this.isSelected ?'star-fill':'star');
  }
}

export interface FavoriteChangedEventArgs{
  newValue:boolean
}