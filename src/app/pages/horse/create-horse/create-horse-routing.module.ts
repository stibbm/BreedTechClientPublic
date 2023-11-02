import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateHorsePage } from './create-horse.page';

const routes: Routes = [
  {
    path: '',
    component: CreateHorsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateHorsePageRoutingModule {}
