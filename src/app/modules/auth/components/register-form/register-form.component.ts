import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthTestService } from '@modules/auth/services/auth-test.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthTestService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', {
          validators: [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
          asyncValidators: this.authService.uniqueEmailValidator(),
          updateOn: 'blur',
        }),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ]),
        passwordConfirm: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      {
        validators: passwordMatchValidator,
      }
    );

    const formControlEmail = this.registerForm.get('email') as FormControl;
    formControlEmail.valueChanges.subscribe((res) =>
      console.log('values: ', res)
    );

    this.registerForm.valueChanges.subscribe((res) =>
      console.log('change ', res)
    );
  }

  testLoaded(): void {
    const mockData = {
      name: 'Armando',
      lastName: 'Salazar',
      email: 'armando@gmail.com',
      password: '123456',
      passwordConfirm: '12345',
    };

    this.registerForm.setValue(mockData);
  }

  testUpload(): void {
    this.registerForm.patchValue({ email: 'bryan@gmail.com' });
  }

  sendCredentials(): void {
    console.log({ ...this.registerForm.value });
  }
}

function passwordMatchValidator(group: AbstractControl | FormGroup): any {
  return group.get('password')?.value === group.get('passwordConfirm')?.value
    ? null
    : { mismatch: true };
}
