import { Component } from '@angular/core';
import { UserSign } from '../model/userSign';
import { SignupService } from '../service/signup.service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'teamManager-signup-card',
  templateUrl: './signup-card.component.html',
  styleUrls: ['./signup-card.component.scss']
})
export class SignupCardComponent {


  user: UserSign = new UserSign

  constructor(private userSignService: SignupService, private messageService: MessageService, private router: Router) { }


  onSubmit() {
    this.userSignService.addUser(this.user).subscribe(
      {
        next: (ok: HttpResponse<any>) => this.router.navigate(['dashboard/']),
        error: (err: HttpErrorResponse) => this.messageService.add({
          severity: 'error',
          summary: 'Error con el servidor: ' + err.status,
          detail: 'Info: ' + err.message
        }
        )
      })
  }

}
