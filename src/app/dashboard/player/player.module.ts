import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerVisualizerComponent } from './player-visualizer/player-visualizer.component';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { HttpClientModule } from '@angular/common/http';
import { PlayerService } from './service/player.service';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/service/auth.service';
import { ToastModule } from 'primeng/toast';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    PlayerVisualizerComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    DividerModule,
    ButtonModule,
    CardModule,
    AvatarModule,
    HttpClientModule,
    ToastModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    InputTextareaModule
  ],
  providers:[
    PlayerService,
    MessageService,
    AuthService
  ]
})
export class PlayerModule { }
