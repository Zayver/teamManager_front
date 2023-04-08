import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';

import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenubarModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    DividerModule
  ],
  providers:[
    MessageService
  ]
})
export class DashboardModule { }
