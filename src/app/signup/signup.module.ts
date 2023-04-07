import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupCardComponent } from './signup-card/signup-card.component';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SignupService } from './service/signup.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SignupCardComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    CardModule,
    FormsModule,
    MessageModule,
    DividerModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    HttpClientModule
  ], 
  providers:[
    SignupService,
    MessageService
  ]
})
export class SignupModule { }
