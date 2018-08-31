import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private readonly MINIMUM_USERNAME_LENGTH = 6;
  private readonly MAXIMUM_USERNAME_LENGTH = 10;
  private readonly MINIMUM_PASSWORD_LENGTH = 6;
  private readonly MAXIMUM_PASSWORD_LENGTH = 10;
  private registerFormGroup;
  private isSubmited: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isSubmited = false;
    let usernameValidators = [Validators.required, Validators.minLength(this.MINIMUM_USERNAME_LENGTH), Validators.maxLength(this.MAXIMUM_USERNAME_LENGTH)]; 
    let passwordValidators = [Validators.required, Validators.minLength(this.MINIMUM_PASSWORD_LENGTH), Validators.maxLength(this.MAXIMUM_PASSWORD_LENGTH)];
    this.registerFormGroup = this.formBuilder.group({
      username: ['', usernameValidators],
      password: ['', passwordValidators],
      confirmPassword: ['', passwordValidators]
    }, {
      validator: PasswordValidator.confirmedPasswordMatch
    })
  }

  get registrationFormGroupControls() {return this.registerFormGroup.controls}

  private onRegistrationSubmit() {
    this.isSubmited = true;
    if(this.registerFormGroup.status == 'INVALID') {
      return;
    }
    else {
      console.log('no errors')
    }
  }

}
