import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Post Title",
    isFavorite : true
  };

  onFavoriteChanged(eventArgs:FavoriteChangedEventArgs){
    console.log('Favorite changed', eventArgs);
  }
}
