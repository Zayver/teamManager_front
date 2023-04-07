import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private http: HttpClient) {


    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'))
    this.currentUser = this.currentUserSubject.asObservable()

    //TODO REMOVE LATER WHEN LOGIN IMPLEMENTED
    let t = new User; t.id=1;t.email ="usuariodeprueba@correo.com"; t.username="usernameP"
    this.currentUserSubject.next(t)

  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.backendAPI}/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User);
  }
}
