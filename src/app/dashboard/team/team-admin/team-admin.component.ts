import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { TeamService } from '../service/team.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'teamManager-team-admin',
  templateUrl: './team-admin.component.html',
  styleUrls: ['./team-admin.component.scss']
})
export class TeamAdminComponent implements OnInit{
  team: Team[] = []
  constructor(private teamService: TeamService, public auth: AuthService, private messageService: MessageService){}
  ngOnInit(): void {
    this.teamService.getUserTeams(this.auth.currentUserValue.id).subscribe({
      next: (v) => {this.team = v; console.log("hecho")},
      error: (err: HttpErrorResponse) => this.messageService.add({
        severity: 'error',
        summary: 'Error con el servidor: ' + err.status,
        detail: 'Info: ' + err.message
      }),
      complete: () => console.info('complete')
    })
    
  }

}
