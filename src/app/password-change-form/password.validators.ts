import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class PasswordValidators{
    static oldPasswordNotValid(control:AbstractControl) : Promise<ValidationErrors> | null {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value === "1234"){
                    resolve(null)
                }else{
                    resolve({ oldPasswordNotValid : true})
                }
            }, 1000);
        });
    }

    static repeatPasswordCheck(control:FormGroup) : ValidationErrors | null{
        let newPassword = control.get('newPassword');
        let repeatPassword = control.get('repeatPassword');
        return newPassword && repeatPassword && newPassword.value === repeatPassword.value ? null : { notSame : true};    }

}