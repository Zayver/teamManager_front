import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../model/team';
import { environment } from 'src/environment/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  getTeams(id: number): Observable<Team[]>{
    return this.http.get<Team[]>(environment.backendAPI+"/team/all/"+ id)
  }

  addTeam(team: Team): Observable<any>{
    return this.http.post(environment.backendAPI+"/team/add", team);
  }

  deleteTeam(id: Number): Observable<any>{
    return this.http.delete(environment.backendAPI+`/delete/${id}`)
  }

  updateTeam(team: Team): Observable<any>{
    return this.http.put(environment.backendAPI+"/team/update", team);
  }

  getUserTeams(id: Number): Observable<Team[]>{
    return this.http.get<Team[]>(environment.backendAPI+`/user/teams/${id}`)
  }

  addUserToTeam(id: number, idTeam: number): Observable<any>{
    //REQUEST JOIN
    return this.http.put(environment.backendAPI+"/request/add", {})
  }
}
