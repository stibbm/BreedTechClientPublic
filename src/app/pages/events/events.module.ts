import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {HorsesPageModule} from "../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EventsPageRoutingModule,
        MatTableModule,
        MatSortModule,
        HorsesPageModule
    ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
