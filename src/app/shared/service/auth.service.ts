import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environment/environment.prod';
import { AuthenticationResponse } from '../model/auth/authentication.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationResponseSubject: BehaviorSubject<AuthenticationResponse>


  constructor(private http: HttpClient) {
    this.authenticationResponseSubject = new BehaviorSubject<AuthenticationResponse>
      (JSON.parse(localStorage.getItem('currentUser') || '{}'))
  }

  public get currentUserValue(): User {
    let user = new User
    user.id = this.authenticationResponseSubject.value.id
    user.email = this.authenticationResponseSubject.value.email
    user.username = this.authenticationResponseSubject.value.username
    return user
  }

  public get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('currentUser');
    return authToken !== null ? true : false;
  }

  public get token(): string {
    return this.authenticationResponseSubject.value.token
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.backendAPI}/auth/authenticate`, {
      "username": username,
      "password": password
    })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.authenticationResponseSubject.next(user);
        return user;
      }));
  }

  signup(user: User) {
    return this.http.post<any>(`${environment.backendAPI}/auth/authenticate`, user).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authenticationResponseSubject.next(user);
      return user;
    }));
  }

  logout() {
    this.http.post(`${environment.backendAPI}/auth/logout`, {}).pipe(
      map(v => {
        localStorage.removeItem('currentUser')
        this.authenticationResponseSubject.next(new AuthenticationResponse);
      })
    )
  }
}
