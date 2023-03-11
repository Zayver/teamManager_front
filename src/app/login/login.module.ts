import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginCardComponent } from './login-card/login-card.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RestorePasswordComponent } from './restore-password/restore-password.component';


@NgModule({
  declarations: [
    LoginCardComponent,
    RestorePasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ]
})
export class LoginModule { }
