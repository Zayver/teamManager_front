import { Injectable } from '@angular/core';
import { Invitation } from '../model/invitation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { InvitationsDetailed } from '../model/invitationsdetailed';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  constructor(private http: HttpClient){}
  
  addInvitation(invitation: Invitation): Observable<any> {
    return this.http.post(environment.backendAPI+"/invitation/add", invitation)
  }
  getInvitationsByUserId(id: number): Observable<InvitationsDetailed[]>{
    return this.http.get<InvitationsDetailed[]>(environment.backendAPI+`/invitation/get/${id}`)
  }
  acceptInvitation(invitation: InvitationsDetailed){
    return this.http.post(environment.backendAPI+"/invitation/accept", invitation)
  }
  declineInvitation(invitation: InvitationsDetailed){
    return this.http.post(environment.backendAPI+"/invitation/decline", invitation)
  }

}
