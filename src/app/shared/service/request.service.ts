import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from '../model/request';
import { Observable } from 'rxjs';
import { RequestDetailed } from '../model/requestdetailed';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  addRequest(request:Request): Observable<any>{
    return this.http.post(environment.backendAPI+"/request/add", request)
  }

  getRequestsByTeamId(id: number): Observable<RequestDetailed[]>{
    const params = new HttpParams().append("id", id)
    return this.http.get<RequestDetailed[]>(environment.backendAPI+"/request/get", {params: params});
  }
  declineRequest(request:RequestDetailed): Observable<any>{
    return this.http.post(environment.backendAPI+"/request/decline", request);
  }
  acceptRequest(request:RequestDetailed): Observable<any>{
    return this.http.post(environment.backendAPI+"/request/accept", request);
  }
}
