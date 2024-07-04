import { Component, OnInit } from '@angular/core';

export type Archive = {
  year: Number;
  month:Number;
};


@Component({
  selector: 'app-archive-home',
  templateUrl: './archive-home.component.html',
  styleUrls: ['./archive-home.component.css']
})



export class ArchiveHomeComponent implements OnInit {

  archives:Archive[] = [
    { 
      year: 2024,
      month: 1
    },
    {
      year: 2024,
      month: 2
    },
    {
      year: 2023,
      month: 8
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
