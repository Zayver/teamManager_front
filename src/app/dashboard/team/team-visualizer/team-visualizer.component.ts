import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Team } from '../model/team';
import { TeamService } from '../service/team.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Request } from 'src/app/shared/model/request';
import { RequestService } from 'src/app/shared/service/request.service';

@Component({
  selector: 'teamManager-team-visualizer',
  templateUrl: './team-visualizer.component.html',
  styleUrls: ['./team-visualizer.component.scss']
})
export class TeamVisualizerComponent implements OnInit {


  constructor(private teamService: TeamService,
    private messageService: MessageService,
    protected authService: AuthService,
    private requestService: RequestService) { }

  teams: Team[] = [];
  showRequest = false
  selectedTeam: Team = new Team
  request: Request = new Request

  ngOnInit(): void {
    this.request.message = ""
    this.teamService.getTeams(this.authService.currentUserValue.id).subscribe({
      next: (v) => { this.teams = v },
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: err.error.message
      }),
      complete: () => console.info('complete')
    })
  }

  showRequestOverlay(team: Team) {
    this.selectedTeam = team
    this.showRequest = true
  }

  sendRequest() {
    this.request.id = this.authService.currentUserValue.id
    this.request.teamId = this.selectedTeam.id
    this.requestService.addRequest(this.request).subscribe({
      next: (v) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Se ha enviado correctamente',
        })
        this.showRequest = false
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
