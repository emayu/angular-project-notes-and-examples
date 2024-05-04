import { Component, AfterViewChecked } from '@angular/core';
declare const PR:any;

@Component({
  selector: 'section-nine',
  templateUrl: './section-nine.component.html',
  styleUrls: ['./section-nine.component.css']
})
export class SectionNineComponent implements AfterViewChecked {

  constructor() { }

  ngAfterViewChecked(): void {
    PR.prettyPrint();
    //prism.highlightAll();
  }


}
