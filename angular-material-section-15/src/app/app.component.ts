import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, timer } from 'rxjs';
import { EditCourseComponent } from './edit-course/edit-course.component';

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

  progress = 0;
  isLoading = false;

  constructor(private dialog: MatDialog){
    const timer = setInterval(()=> {
      this.progress++;
      if(this.progress == 100) clearInterval(timer);
    }, 35);
    this.isLoading = true;
    this.getCourses( )
    .subscribe(r => this.isLoading = false)
  }

  getCourses() {
    return timer(3000);
  }

  selectCategory(category){
    this.categories
    .filter( c => c.name != category.name)
    .forEach( c => c.selected = false);
    category.selected = !category.selected;
  }

  onChange($event){
    console.log($event);
  }

  openDialog(){
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1}
    })
    .afterClosed()
    .subscribe(
      result => console.log(result)
    );
  }
}
