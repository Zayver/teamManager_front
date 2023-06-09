import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamVisualizerComponent } from './team-visualizer/team-visualizer.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TeamService } from './service/team.service';
import { HttpClientModule } from '@angular/common/http';
import { TeamCreatorComponent } from './team-creator/team-creator.component';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TeamAdminComponent } from './team-admin/team-admin.component';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { RequestService } from 'src/app/shared/service/request.service';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    TeamVisualizerComponent,
    TeamCreatorComponent,
    TeamAdminComponent
    
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    CardModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    InputTextareaModule,
    MessageModule,
    ToastModule,
    DividerModule,
    DialogModule,
    AvatarModule,
    InputTextModule
  ],
  providers: [
    TeamService,
    MessageService,
    RequestService
  ]
})
export class TeamModule { }
