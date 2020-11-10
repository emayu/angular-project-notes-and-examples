import { Component} from '@angular/core';

@Component({
  selector: 'conctact-form',
  templateUrl: './conctact-form.component.html',
  styleUrls: ['./conctact-form.component.css']
})
export class ConctactFormComponent{
  conctactMethods = [
    { id:1, name:'Email'},
    { id:2, name:'Phone'}
  ];
  
  log(x){
    console.log(x);
  }

  submit(f){
    console.log(f);
  }

}
