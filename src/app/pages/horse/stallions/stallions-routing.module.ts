import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StallionsPage } from './stallions.page';

const routes: Routes = [
  {
    path: '',
    component: StallionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StallionsPageRoutingModule {}
