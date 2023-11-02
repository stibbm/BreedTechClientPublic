import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentActionTypePage } from './appointment-action-type.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentActionTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentActionTypePageRoutingModule {}
