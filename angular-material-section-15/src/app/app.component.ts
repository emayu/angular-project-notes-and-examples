import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  isChecked = true;
  colors = [
    { id: 1, name: "Red"},
    { id: 2, name: "Green"},
    { id: 3, name: "Blue"},
  ]

  color = 2;

  categories = [
    { name: 'Beginner', selected: false },
    { name: 'Intermediate', selected: true },
    { name: 'Advanced', selected: false },
  ];

  selectCategory(category){
    this.categories
    .filter( c => c.name != category.name)
    .forEach( c => c.selected = false);
    category.selected = !category.selected;
  }

  onChange($event){
    console.log($event);
  }
}
