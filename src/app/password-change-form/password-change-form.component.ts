import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css']
})
export class PasswordChangeFormComponent  {
  form = new FormGroup({
    oldPassword : new FormControl(
      '',
      [Validators.required],
      PasswordValidators.oldPasswordNotValid
    ),
    passwordG : new FormGroup({
      newPassword : new FormControl(
        '',
        [Validators.required]
      ),
      repeatPassword : new FormControl(
        '',
        [Validators.required]
      )
    }, PasswordValidators.repeatPasswordCheck)
  });

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('passwordG.newPassword');
  }

  get repeatPassword(){
    return this.form.get('passwordG.repeatPassword');
  }

  log(){
    console.log(this.form)
  }

}
