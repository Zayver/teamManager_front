import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Team } from '../model/team';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  getTeams(id: number): Observable<Team[]>{
    const params = new HttpParams().append("id", id)
    return this.http.get<Team[]>(environment.backendAPI+"/team/all", {params: params})
  }

  addTeam(team: Team, userId: number): Observable<any>{
    const params = new HttpParams().append("id",userId)
    return this.http.post(environment.backendAPI+"/team/add", team, {params: params});
  }

  deleteTeam(id: number): Observable<any>{
    const params = new HttpParams().append("id", id)
    return this.http.delete(environment.backendAPI+`/delete`, {params: params})
  }

  updateTeam(team: Team): Observable<any>{
    return this.http.put(environment.backendAPI+"/team/update", team);
  }

  getUserTeams(id: number): Observable<Team[]>{
    const params = new HttpParams().append("id", id)
    return this.http.get<Team[]>(environment.backendAPI+`/user/teams`, {params: params})
  }

  getUsersByTeam(id: number): Observable<any>{
    const params = new HttpParams().append("id", id)
    return this.http.get(environment.backendAPI+"/team/users", {params: params})
  }
}
