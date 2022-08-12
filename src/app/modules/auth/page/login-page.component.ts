import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  value = 'Hi I Pepe';

  constructor(private replaceSpace: ReplaceSpacePipe) {}

  ngOnInit(): void {
    this.value = this.replaceSpace.transform(this.value, '-');
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendCredentials(): void {
    console.log({ ...this.loginForm.value });
  }
}
