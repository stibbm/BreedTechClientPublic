import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoveHorseFromStallsPagePage } from './move-horse-from-stalls-page.page';

const routes: Routes = [
  {
    path: '',
    component: MoveHorseFromStallsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoveHorseFromStallsPagePageRoutingModule {}
