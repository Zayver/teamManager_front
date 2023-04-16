import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { PlayerService } from '../service/player.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Team } from '../../team/model/team';
import { InvitationService } from 'src/app/shared/service/invitation.service';
import { Invitation } from 'src/app/shared/model/invitation';

@Component({
  selector: 'teamManager-player-visualizer',
  templateUrl: './player-visualizer.component.html',
  styleUrls: ['./player-visualizer.component.scss']
})
export class PlayerVisualizerComponent implements OnInit {


  users: User[] = []
  invitationOverlay: boolean = false;
  inviteUser: User = new User

  userTeams: Team[] = []
  selectedTeam: Team | null = null
  invitation: Invitation = new Invitation


  constructor(private playerService: PlayerService, private authService: AuthService, private messageService: MessageService, private invitationService: InvitationService) {
  }

  ngOnInit(): void {
    this.playerService.getAllUsersExceptCaller(this.authService.currentUserValue.id).subscribe({
      next: (v) => this.users = v,
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: err.error.message
      }),
      complete: () => console.info('complete')
    })

    this.playerService.getAllTeamsByUser(this.authService.currentUserValue.id).subscribe({
      next: (v) => this.userTeams = v,
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: err.error.message
      }),
      complete: () => console.info('complete')
    })
  }
  showInvitationOverlay(user: User) {
    console.log(this.selectedTeam)
    this.invitationOverlay = true
    this.inviteUser = user
  }
  sendInvitation() {
    if (this.selectedTeam != null) {
      this.invitation.teamId = this.selectedTeam.id
      this.invitation.userReceiverId = this.inviteUser.id
      this.invitation.userOwnerId = this.authService.currentUserValue.id
      this.invitationService.addInvitation(this.invitation).subscribe({
        next: (v) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Realizado todo con éxito'
          })
          this.invitationOverlay = false
        },
        error: (err: HttpErrorResponse) => this.messageService.add({
          severity: 'error',
          summary: 'Error con el servidor: ' + err.status,
          detail: err.error.message
        }),
        complete: () => console.info('complete')
      });
    }
  }





}
