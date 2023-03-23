import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamVisualizerComponent } from './team-visualizer/team-visualizer.component';

const routes: Routes = [
  {path: "", component: TeamVisualizerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
