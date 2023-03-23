import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamVisualizerComponent } from './team-visualizer/team-visualizer.component';


@NgModule({
  declarations: [
    TeamVisualizerComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
