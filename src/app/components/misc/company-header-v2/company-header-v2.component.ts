import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController, PopoverController} from "@ionic/angular";

@Component({
  selector: 'app-company-header-v2',
  templateUrl: './company-header-v2.component.html',
  styleUrls: ['./company-header-v2.component.scss'],
})
export class CompanyHeaderV2Component implements OnInit {

  constructor(
    private router: Router,
    private navController: NavController,
    private popoverController: PopoverController
  ) {}

  async ngOnInit() {}

  async goToHorsePage() {
    await this.router.navigate(['horses']);
  }

  async goToHorseCards2Page() {
    await this.router.navigate(['horse-cards2']);
  }

  async goToHorseCardsTestPage() {
    await this.router.navigate(['horses']);
  }

  async goToStallsPage() {
    await this.router.navigate(['stalls']);
  }

  async goToAppointmentsPage() {
    await this.router.navigate(['appointment']);
  }

  async goToUsersPage() {
    await this.router.navigate(['users']);
  }

  async goToAppointmentActionTypesPage() {
    await this.router.navigate(['appointment-action-types']);
  }

  async goToHomePage() {
    await this.router.navigate(['horses']);
  }
}
