import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorsesPage } from './horses.page';

const routes: Routes = [
  {
    path: '',
    component: HorsesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorsesPageRoutingModule {}
