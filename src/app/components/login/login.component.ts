import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authenticationService/authentication.service';
import { Router } from '@angular/router';
import { UserConnectionEventService } from '../../services/events/user-connection-event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup
  private loginFormSubmitted: boolean
  private userAuthenticationFailed: boolean

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthenticationService, private userConnectionEventService: UserConnectionEventService) { }

  ngOnInit() {
    this.userAuthenticationFailed = false;
    this.loginFormSubmitted = false;
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]
    ],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.loginFormSubmitted = true;
    this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
    .subscribe(data => {
      if(data.status == 'error') {
        this.userAuthenticationFailed = true;
        return;
      }
      this.router.navigate(['/todos']);
    })

  }

  get loginFormControls() { return this.loginForm.controls}

}
