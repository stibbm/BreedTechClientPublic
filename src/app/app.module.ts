import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CreateChargeInputComponent } from './components/inputs/create-charge-input/create-charge-input.component';
import {HorsesPageModule} from './pages/horse/horses/horses.module';
import {CreateAppointmentPageModule} from './pages/appointment/create-appointment/create-appointment.module';
import {MatSortModule} from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
    declarations: [AppComponent, CreateChargeInputComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        NgxDatatableModule,
        IonicStorageModule.forRoot(),
        ReactiveFormsModule,
        MatTableModule,
        MatRadioModule,
        HorsesPageModule,
        MatSortModule,
        FormsModule,
        CreateAppointmentPageModule,
        BrowserAnimationsModule,
    ],
    providers: [
        Platform,
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
    bootstrap: [AppComponent],
    exports: [
        CreateChargeInputComponent
    ]
})
export class AppModule {}
