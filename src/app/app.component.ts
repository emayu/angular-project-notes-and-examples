import { AfterViewChecked, Component } from '@angular/core';

declare const PR:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  ngAfterViewChecked(): void {
    PR.prettyPrint();
  }
  
}
