import { Component } from '@angular/core';
import { FieldReservation } from '../model/fieldreservation.model';
import { FieldService } from '../service/field.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'teamManager-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

  reservation: FieldReservation = new FieldReservation
  today = new Date

  constructor(private fieldService: FieldService, private messageService: MessageService){
  }

  sendReservation(){
    //PLACEHOLDER UNTIL API URL PROVIDED
    //this.fieldService.sendFieldReservation(this.reservation).subscribe()
    this.messageService.add({
      severity:'info',
      summary: "Reservation: "+this.reservation.date,
      detail: "Comment: "+this.reservation.comment,
      sticky: true
    })
  }


}
