import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'teamManager-team-admin',
  templateUrl: './team-admin.component.html',
  styleUrls: ['./team-admin.component.scss']
})
export class TeamAdminComponent implements OnInit{
  team: Team = new Team

  constructor(private teamService: TeamService){}
  ngOnInit(): void {
        
  }

}
