import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorseCardsPage } from './horse-cards.page';

const routes: Routes = [
  {
    path: '',
    component: HorseCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorseCardsPageRoutingModule {}
