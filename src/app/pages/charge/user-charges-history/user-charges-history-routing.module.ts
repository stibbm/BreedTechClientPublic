import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserChargesHistoryPage } from './user-charges-history.page';

const routes: Routes = [
  {
    path: '',
    component: UserChargesHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserChargesHistoryPageRoutingModule {}
