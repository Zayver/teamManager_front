import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../model/team';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  getTeams(id: number): Observable<Team[]>{
    return this.http.get<Team[]>(environment.backendAPI+"/team/all/"+ id)
  }

  addTeam(team: Team, userId: number): Observable<any>{
    return this.http.post(environment.backendAPI+"/team/add/"+userId, team);
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

  getUsersByTeam(id: number): Observable<any>{
    return this.http.get(environment.backendAPI+"/team/users/"+id)
  }
}
