import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter<FavoriteChangedEventArgs>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

}

export interface FavoriteChangedEventArgs {
  newValue:boolean;
}
