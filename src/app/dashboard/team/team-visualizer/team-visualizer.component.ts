import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Team } from '../model/team';
import { TeamService } from '../service/team.service';
import { environment } from 'src/environment/environment.prod';

@Component({
  selector: 'teamManager-team-visualizer',
  templateUrl: './team-visualizer.component.html',
  styleUrls: ['./team-visualizer.component.scss']
})
export class TeamVisualizerComponent implements OnInit {


  constructor(private teamService: TeamService, private messageService: MessageService) { }

  teams: Team[] = [];

  ngOnInit(): void {
    this.teamService.getTeams().subscribe({
      next: (v) => { this.teams = v },
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: 'Ha ocurrido un error al intentar acceder a los datos del servidor backend: ' + err.message
      }),
      complete: () => console.info('complete')
    })
  }

  joinTeam(id: number) {
    this.teamService.addUserToTeam(environment.testId, id).subscribe({
      next: (v) => this.messageService.add({
        severity: "success",
        summary: 'Todo realizado con éxito'
      }),
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: 'Info: ' + err.message
      }),
      complete: () => console.info('complete')
    })
  }

}
