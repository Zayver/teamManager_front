import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Team[]>(environment.backendAPI+`/user/teams/${id}`)
  }

  constructor(private http: HttpClient) { }

  getAllUsersExceptCaller(id: number): Observable<User[]>{
    return this.http.get<User[]>(environment.backendAPI+"/user/all/"+id)
  }

  
}
