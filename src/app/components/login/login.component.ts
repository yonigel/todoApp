import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authenticationService/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup
  private loginFormSubmitted: boolean

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthenticationService) { }

  ngOnInit() {
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
      this.router.navigate(['/']);
    })

  }

  get loginFormControls() { return this.loginForm.controls}

}
