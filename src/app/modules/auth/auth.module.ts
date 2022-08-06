import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { LoginPageComponent } from '@modules/auth/page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from '@modules/auth/components/register-form/register-form.component';

@NgModule({
  declarations: [LoginPageComponent, RegisterFormComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, ReactiveFormsModule],
})
export class AuthModule {}
