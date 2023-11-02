import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemenCollectionLogPage } from './semen-collection-log.page';

const routes: Routes = [
  {
    path: '',
    component: SemenCollectionLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemenCollectionLogPageRoutingModule {}
