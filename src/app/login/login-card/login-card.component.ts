import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'teamManager-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent {

  username = ""
  password = ""
  
  constructor(private router: Router, private auth: AuthService, private messageService: MessageService) {
    if(this.auth.isLoggedIn){
      this.router.navigate(['/dashboard'])
    }
  }
  navigateSignUp() {
    this.router.navigate(['', 'signup'])
  }
  navigateRestorePassword() {
    this.router.navigate(['login', 'restore_password']
    )
  }
  onSubmit() {
    this.auth.login(this.username, this.password).subscribe({
      next: (v) => {
        this.router.navigate(['/dashboard'])
      },
      error: (err: HttpErrorResponse) => {
        if(err.status === 403){
          this.messageService.add({
            severity: 'error',
            summary: 'Error usuario o contraseña incorrecto',
          })
        }
        else{
          this.messageService.add({
            severity: 'error',
            summary: 'Error con el servidor: ' + err.status,
            detail: 'Info: ' + err.error.message
          })
        }
      }
    })
  }


}
