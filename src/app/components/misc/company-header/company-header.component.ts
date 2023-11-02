import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-header',
  templateUrl: './company-header.component.html',
  styleUrls: ['./company-header.component.scss'],
})
export class CompanyHeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  async ngOnInit() {}

  async goToHomePage() {
    await this.router.navigate(['home']);
  }

  async goToHorsesPage() {
    await this.router.navigate(['horses']);
  }

  async goToStallsPage() {
    await this.router.navigate(['stalls']);
  }

  async goToAppointmentsPage() {
    await this.router.navigate(['appointment']);
  }

  async goToAppointmentActionsPage() {
    await this.router.navigate(['appointment-action']);
  }

  async goToAppointmentActionTypesPage() {
    await this.router.navigate(['appointment-action-type']);
  }

  async goToAppointmentsAmountDuePage() {
    await this.router.navigate(['appointments-amount-due']);
  }

  async goToHorseCardsPage() {
    await this.router.navigate(['horse-cards']);
  }

  async goToEventsPage() {
    await this.router.navigate(['events']);
  }

  async goToAppointmentCardsPage() {
    await this.router.navigate(['appointment-cards']);
  }
}
