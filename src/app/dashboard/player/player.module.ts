import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerVisualizerComponent } from './player-visualizer/player-visualizer.component';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    PlayerVisualizerComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    DividerModule,
    ButtonModule,
    CardModule
  ]
})
export class PlayerModule { }
