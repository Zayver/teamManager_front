import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: "", redirectTo: "team", pathMatch: "full"},
      {path: "team", loadChildren: () => import('./team/team.module').then(m => m.TeamModule)},
      {path: "player", loadChildren: () => import('./player/player.module').then(m => m.PlayerModule)},
      {path: "field", loadChildren: () => import('./field/field.module').then(m => m.FieldModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
