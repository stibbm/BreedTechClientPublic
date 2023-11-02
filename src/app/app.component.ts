import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Login';
  Pages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'User',
      url: '/user',
      icon: 'person'
    },
    {
      title: 'Stalls',
      url: '/stalls',
      icon: 'person'
    },
    {
      title: 'Horses',
      url: '/horses',
      icon: 'person'
    },
    {
      title: 'Stallions',
      url: '/stallions',
      icon: 'person'
    },
    {
      title: 'Appointment',
      url: '/appointment',
      icon: 'person'
    },
    {
      title: 'Appointment Actions',
      url: '/all-appointments-actions',
      icon: 'person'
    },
    {
      title: 'Appointment Action Types',
      url: '/appointment-action-type',
      icon: 'person'
    },
    {
      title: 'Events',
      url: '/events',
      icon: 'person'
    },
    {
      title: 'Appointment Amount Due',
      url: '/appointments-amount-due',
      icon: 'person'
    },
    {
      title: 'Horse Cards',
      url: '/horse-cards',
      icon: 'person'
    }
  ];
  activeIndex: number;
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private authService: AuthService,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
