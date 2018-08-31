import { FormControl, AbstractControl } from "@angular/forms";


export class PasswordValidator {
    static confirmedPasswordMatch(control: AbstractControl) {
        
        let password = control.get('password').value;
        let confirmedPassword = control.get('confirmPassword').value;
        if(password != confirmedPassword) {
            control.get('confirmPassword').setErrors( {confirmedPasswordMatch: true} )
        } else {
            return null;
        }
    }
}