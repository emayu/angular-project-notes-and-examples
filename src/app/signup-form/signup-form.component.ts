import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ], UsernameValidators.shouldBeUnique ),
    password : new FormControl('',Validators.required),
  });

  login(){
    //call services if it throw an error we can return a error as below.
    console.log(this.form);
    this.form.setErrors({
      invalidLogin : true 
    });
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password')
  }
}
