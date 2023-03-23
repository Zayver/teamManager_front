import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './main/main.component';

import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenubarModule,
    ButtonModule
  ]
})
export class DashboardModule { }
