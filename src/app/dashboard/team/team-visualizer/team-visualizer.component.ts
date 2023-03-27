import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Team } from '../model/team';
import { TeamService } from '../service/team.service';

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

}
