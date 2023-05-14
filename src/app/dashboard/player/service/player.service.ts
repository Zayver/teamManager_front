import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';
import { Team } from '../../team/model/team';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  getAllTeamsByUser(id: any) {
    const params = new HttpParams().append("id", id)
    return this.http.get<Team[]>(environment.backendAPI+`/user/teams`, {params: params})
  }

  constructor(private http: HttpClient) { }

  getAllUsersExceptCaller(id: number): Observable<User[]>{
    const params = new HttpParams().append("id", id)
    return this.http.get<User[]>(environment.backendAPI+"/user/all", {params: params}) 
  }

  
}
