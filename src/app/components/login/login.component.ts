import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup
  private loginFormSubmitted: boolean

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginFormSubmitted = false;
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]
    ],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.loginForm.value)
    this.loginFormSubmitted = true;
  }

  get f() { return this.loginForm.controls}

}
