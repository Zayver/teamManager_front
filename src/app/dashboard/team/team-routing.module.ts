import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamAdminComponent } from './team-admin/team-admin.component';
import { TeamCreatorComponent } from './team-creator/team-creator.component';
import { TeamVisualizerComponent } from './team-visualizer/team-visualizer.component';

const routes: Routes = [
  {path: "", component: TeamVisualizerComponent},
  {path: "create", component: TeamCreatorComponent},
  {path: "admin", component: TeamAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
