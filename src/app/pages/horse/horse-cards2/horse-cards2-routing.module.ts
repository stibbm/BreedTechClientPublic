import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorseCards2Page } from './horse-cards2.page';

const routes: Routes = [
  {
    path: '',
    component: HorseCards2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorseCards2PageRoutingModule {}
