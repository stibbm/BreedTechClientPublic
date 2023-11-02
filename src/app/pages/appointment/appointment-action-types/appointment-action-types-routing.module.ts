import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentActionTypesPage } from './appointment-action-types.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentActionTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentActionTypesPageRoutingModule {}
