import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from '../model/request';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { RequestDetailed } from '../model/requestdetailed';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  addRequest(request:Request): Observable<any>{
    return this.http.post(environment.backendAPI+"/request/add", request)
  }

  getRequestsByTeamId(id: number): Observable<RequestDetailed[]>{
    return this.http.get<RequestDetailed[]>(environment.backendAPI+"/request/get/"+id);
  }
  declineRequest(request:RequestDetailed): Observable<any>{
    return this.http.post(environment.backendAPI+"/request/decline", request);
  }
  acceptRequest(request:RequestDetailed): Observable<any>{
    return this.http.post(environment.backendAPI+"/request/accept", request);
  }
}
