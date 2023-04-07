import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupCardComponent } from './signup-card/signup-card.component';


const routes: Routes = [
  {path: '', component: SignupCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
