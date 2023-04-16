import { HttpErrorResponse, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Team } from '../model/team';
import { TeamService } from '../service/team.service';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'teamManager-team-creator',
  templateUrl: './team-creator.component.html',
  styleUrls: ['./team-creator.component.scss']
})
export class TeamCreatorComponent {

  team: Team = new Team;
  constructor(private teamService: TeamService, private router: Router, private messageService: MessageService, private auth: AuthService) { }


  onSubmit() {
    this.teamService.addTeam(this.team, this.auth.currentUserValue.id).subscribe({
      next: (ok: HttpResponse<any>) => this.router.navigate(['dashboard/']),
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: err.error.message
      })

    })
  }

}
