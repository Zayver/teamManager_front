import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldRoutingModule } from './field-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FieldService } from './service/field.service';


@NgModule({
  declarations: [
    ReservationComponent
  ],
  imports: [
    CommonModule,
    FieldRoutingModule,
    CardModule,
    CalendarModule,
    ButtonModule,
    DividerModule,
    HttpClientModule,
    FormsModule,
    InputTextareaModule,
    MessageModule,
    ToastModule
  ],
  providers:[
    MessageService,
    FieldService
  ]
})
export class FieldModule { }
