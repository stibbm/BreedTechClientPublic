import { Component, OnInit } from '@angular/core';
import {StripeService} from "../../../services/stripe.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.page.html',
  styleUrls: ['./stripe-payment.page.scss'],
})
export class StripePaymentPage implements OnInit {

  constructor(
    private stripeService: StripeService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    console.log('ngOnInit');
    await this.authService.verifyUserLoggedIn();
  }

  async ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }



}
