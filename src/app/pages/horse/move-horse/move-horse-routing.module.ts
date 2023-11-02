import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoveHorsePage } from './move-horse.page';

const routes: Routes = [
  {
    path: '',
    component: MoveHorsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoveHorsePageRoutingModule {}
