import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSemenCollectionLogPage } from './create-semen-collection-log.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSemenCollectionLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogCollectionPageRoutingModule {}
