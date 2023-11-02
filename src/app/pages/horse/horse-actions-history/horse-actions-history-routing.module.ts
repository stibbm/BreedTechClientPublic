import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorseActionsHistoryPage } from './horse-actions-history.page';

const routes: Routes = [
  {
    path: '',
    component: HorseActionsHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorseActionsHistoryPageRoutingModule {}
