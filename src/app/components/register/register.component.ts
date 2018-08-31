import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../../validators/password.validator'
import { UserService } from '../../services/userService/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

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
  private isUserAlreadyExists: boolean;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.isUserAlreadyExists = false;
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
      console.log(`username is ${this.registerFormGroup.controls.username.value}`);
      let newUser: User = new User(this.registerFormGroup.controls.username.value, this.registerFormGroup.controls.password.value);
      this.userService.register(newUser).subscribe(response=>{
        console.log(`response for registration is ${JSON.stringify(response)}`)
        if(response.status == 'error') {
          this.isUserAlreadyExists = true;
          return;
        }
        else {
          this.router.navigate(['/registrationSucceede']);
        }

      })
    }
  }

}
