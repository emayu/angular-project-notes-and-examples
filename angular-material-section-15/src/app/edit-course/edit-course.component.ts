import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export const DIALOG_DATA = new InjectionToken('DIALOG_DATA')

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(@Inject(DIALOG_DATA)data:any) { 
    console.log("Data", data);
  }

  ngOnInit(): void {
  }

}
