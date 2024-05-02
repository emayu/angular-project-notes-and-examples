import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css']
})
export class FormArrayExampleComponent  {
    form = new FormGroup({
      topics: new FormArray([])
    });

    addTopic = (event:KeyboardEvent) => {
      let topic = (event.target as HTMLInputElement);
      event.preventDefault();
      console.log(this.topics);
      if(topic.value && topic.value.length > 0){
        (this.topics)
        .push(new FormControl(topic.value))
        topic.value = ''
      }
      
    }

    removeTopic = (topic:FormControl) => {
      let index = this.topics.controls.indexOf(topic);
      this.topics.removeAt(index);
    }

    get topics (){
      return this.form.get('topics') as FormArray;
    }

    clear = () => {
      console.log('clear');
      this.topics.clear();
    }
  

}