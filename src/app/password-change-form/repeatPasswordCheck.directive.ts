import { Directive } from "@angular/core";
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Directive({
    selector: '[repeatPasswordCheck]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidators, multi: true }]
  })
  export class RepeatPasswordCheckDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors {
      return PasswordValidators.repeatPasswordCheck((control as FormGroup));
    }
  }