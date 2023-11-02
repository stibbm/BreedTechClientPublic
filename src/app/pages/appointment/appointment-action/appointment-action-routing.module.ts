import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentActionPage } from './appointment-action.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentActionPageRoutingModule {}
