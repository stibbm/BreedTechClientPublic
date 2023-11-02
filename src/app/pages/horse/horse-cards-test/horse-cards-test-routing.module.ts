import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorseCardsTestPage } from './horse-cards-test.page';

const routes: Routes = [
  {
    path: '',
    component: HorseCardsTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorseCardsTestPageRoutingModule {}
