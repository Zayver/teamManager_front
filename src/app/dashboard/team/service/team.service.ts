import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Team } from '../model/team';
import { environment } from 'src/environment/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  teams$!: Observable<Team[]>;

  getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>(environment.backendAPI+"/team/all")
  }

  addTeam(team: Team): Observable<any>{
    return this.http.post(environment.backendAPI+"/team/add", team);
  }
}
