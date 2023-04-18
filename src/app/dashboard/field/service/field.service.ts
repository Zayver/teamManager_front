import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FieldReservation } from '../model/fieldreservation.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http: HttpClient) {}

  sendFieldReservation(reservation: FieldReservation): Observable<any>{
    return this.http.post(environment.fieldAPI+"/reservation", reservation)
  }
}
