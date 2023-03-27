import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Team } from '../model/team';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'teamManager-team-creator',
  templateUrl: './team-creator.component.html',
  styleUrls: ['./team-creator.component.scss']
})
export class TeamCreatorComponent {

  team: Team = new Team;
  constructor(private teamService: TeamService, private router: Router, private messageService: MessageService) { }


  onSubmit() {
    this.teamService.addTeam(this.team).subscribe({
      next: (ok: HttpResponse<any>) => this.router.navigate(['dashboard/']),
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: 'Ha ocurrido un error al intentar acceder a los datos del servidor backend: ' + err.message
      })

    })
  }

}
