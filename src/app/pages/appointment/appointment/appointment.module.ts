import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentPageRoutingModule } from './appointment-routing.module';

import { AppointmentPage } from './appointment.page';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatTableModule} from '@angular/material/table';
import {WeekdayCalendarComponent} from '../../../components/misc/weekday-calendar/weekday-calendar.component';
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppointmentPageRoutingModule,
        NgxDatatableModule,
        MatTableModule,
        HorsesPageModule
    ],
  declarations: [AppointmentPage, WeekdayCalendarComponent, WeekdayCalendarComponent]
})
export class AppointmentPageModule {}
