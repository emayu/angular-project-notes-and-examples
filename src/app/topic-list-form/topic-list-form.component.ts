import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'topic-list-form',
  templateUrl: './topic-list-form.component.html',
  styleUrls: ['./topic-list-form.component.css']
})
export class TopicListFormComponent  {
  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics():FormArray{
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  
}
