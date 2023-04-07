import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSign } from '../model/userSign';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {}

  addUser(user: UserSign): Observable<any>{
    return this.http.post(environment.backendAPI+"/user/add", user)
  }
}
