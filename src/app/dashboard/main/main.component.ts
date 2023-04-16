import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { InvitationsDetailed } from '../../shared/model/invitationsdetailed';
import { InvitationService } from 'src/app/shared/service/invitation.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'teamManager-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'Equipos',
      icon: 'pi pi-fw pi-id-card',
      items: [{
        label: 'Crear',
        icon: 'pi pi-fw pi-plus',
        command: () => { this.router.navigateByUrl('dashboard/team/create') }
      },
      {
        label: 'Administrar mis equipos',
        icon: 'pi pi-fw pi-briefcase',
        command: () => { this.router.navigateByUrl('dashboard/team/admin') }
      }
      ],
      command: () => { this.router.navigateByUrl('dashboard/team') }
    },
    {
      label: 'Jugadores',
      icon: 'pi pi-fw pi-user',
      command: () => { this.router.navigateByUrl('dashboard/player') }
    },
    {
      label: 'Canchas',
      icon: 'pi pi-fw pi-calendar-minus',
      command: () => { this.router.navigateByUrl('dashboard/field') }
    }
  ];

  invitations: InvitationsDetailed[] = []

  showInvitations = false

  constructor(private router: Router, private invitationService: InvitationService, protected authService: AuthService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.invitationService.getInvitationsByUserId(this.authService.currentUserValue.id).subscribe(
      {
        next: (v) => this.invitations = v,
        error: (err: HttpErrorResponse) => this.messageService.add({
          severity: 'error',
          summary: 'Error con el servidor: ' + err.status,
          detail: err.error.message
        }),
        complete: () => console.info('complete')
      }
    );
  }


  logOut() {
    this.authService.logout().subscribe({
      next: (v) => this.router.navigate(['/login']),
      error: (err: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          detail: err.error.message
        })
      },
    })
  }

  acceptInvitation(invitation: InvitationsDetailed, pos: number) {
    this.invitationService.acceptInvitation(invitation).subscribe({
      next: (v) => {
        this.messageService.add({
          severity: 'success',
          summary: 'La invitación ha sido aceptada y has sido añadido al equipo'
        })
        this.invitations.splice(pos, 1)

      },
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: err.error.message
      }),
      complete: () => console.info('complete')
    })
  }
  declineInvitation(invitation: InvitationsDetailed, pos: number) {
    console.log(invitation)
    this.invitationService.declineInvitation(invitation).subscribe({
      next: (v) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Se ha eliminado la invitación correctamente'
        })
        this.invitations.splice(pos, 1)

      },
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: err.error.message
      }),
      complete: () => console.info('complete')
    })
  }
  showInvitationOverlay() {
    this.showInvitations = true
  }
}


