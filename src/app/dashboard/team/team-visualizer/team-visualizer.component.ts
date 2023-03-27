import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'teamManager-team-visualizer',
  templateUrl: './team-visualizer.component.html',
  styleUrls: ['./team-visualizer.component.scss']
})
export class TeamVisualizerComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  teams: Team[] = [];

  ngOnInit(): void {
    this.teamService.getTeams().subscribe({
      next: (v) => {this.teams = v},
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

}
