import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { TeamService } from '../service/team.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { RequestDetailed } from 'src/app/shared/model/requestdetailed';
import { RequestService } from 'src/app/shared/service/request.service';

@Component({
  selector: 'teamManager-team-admin',
  templateUrl: './team-admin.component.html',
  styleUrls: ['./team-admin.component.scss']
})
export class TeamAdminComponent implements OnInit {
  team: Team[] = []
  showRequests = false
  selectedTeam: Team = new Team
  requests: RequestDetailed[] = []


  constructor(private teamService: TeamService,
    public auth: AuthService,
    private messageService: MessageService,
    private requestService: RequestService) { }

  ngOnInit(): void {
    this.teamService.getUserTeams(this.auth.currentUserValue.id).subscribe({
      next: (v) => { this.team = v; console.log("hecho") },
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: err.error.message
      }),
      complete: () => console.info('complete')
    })

  }
  showRequestsOverlay(team: Team) {
    this.selectedTeam = team
    this.requestService.getRequestsByTeamId(team.id).subscribe({
      next: (v) => {
        this.requests = v
        this.showRequests = true
      },
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: err.error.message
      }),
      complete: () => console.info('complete')
    })
  }

  acceptRequest(request: RequestDetailed, pos: number) {
    this.requestService.acceptRequest(request).subscribe({
      next: (v) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Aceptada correctamente',
        })
        this.requests.splice(pos,1)
      },
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: err.error.message
      }),
      complete: () => console.info('complete')
    })

  }

  declineRequest(request: RequestDetailed, pos: number) {
    this.requestService.declineRequest(request).subscribe({
      next: (v) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Rechazada correctamente',
        })
        this.requests.splice(pos,1)
      },
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: err.error.message
      }),
      complete: () => console.info('complete')
    })

  }

}
