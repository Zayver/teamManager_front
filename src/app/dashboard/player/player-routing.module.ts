import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerVisualizerComponent } from './player-visualizer/player-visualizer.component';

const routes: Routes = [
  {path: "", component: PlayerVisualizerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
