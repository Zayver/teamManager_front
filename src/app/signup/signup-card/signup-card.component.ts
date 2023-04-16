import { Component } from '@angular/core';
import { UserSign } from '../model/userSign';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import { AuthenticationRequest } from 'src/app/shared/model/auth/authentication.request';
import { RegisterRequest } from 'src/app/shared/model/auth/register.request';

@Component({
  selector: 'teamManager-signup-card',
  templateUrl: './signup-card.component.html',
  styleUrls: ['./signup-card.component.scss']
})
export class SignupCardComponent {


  user:RegisterRequest  = new RegisterRequest

  constructor(private auth: AuthService, private messageService: MessageService, private router: Router) { }


  onSubmit() {
    this.auth.signup(this.user).subscribe({
      next: () => {
        this.router.navigate(['/dashboard'])
      },
      error: (err: HttpErrorResponse) =>{
        this.messageService.add({
          severity: 'error',
          detail: "Error on signup: "+ err.status
        })
      }
    })
  }

}
