import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'teamManager-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent {
  
  constructor(private router: Router) { }
  navigateSignUp() {
    this.router.navigate(['', 'signup'])
  }
  navigateRestorePassword() {
    this.router.navigate(['login', 'restore_password']
    )
  }
  onSubmit() {
    //TODO ACTUAL LOGIN
    this.router.navigate(["/dashboard"])
  }
  username = ""
  password = ""

}
