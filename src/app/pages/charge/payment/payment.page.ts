import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoaderService} from '../../../services/loader.service';
import {GetAppointmentAmountDueResponse} from '../../../model/Appointment';
import {CreateStripeProductRequest, CreateStripeProductResponse} from '../../../model/StripeProduct';
import {StripeService} from '../../../services/stripe.service';
import {CreateStripePriceRequest, CreateStripePriceResponse} from '../../../model/StripePrice';
import { DOCUMENT } from '@angular/common';
import {
  CreateStripePaymentLinkRequest,
  CreateStripePaymentLinkResponse,
  StripePaymentLink
} from '../../../model/StripePaymentLink';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse;
  appointmentId: number;
  isGetAppointmentAmountDueResponseLoaded = false;
  paymentAmount: number;
  isStripePaymentLinkLoaded = false;
  stripePaymentLink: StripePaymentLink;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
    private loaderService: LoaderService,
    private stripeService: StripeService,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.loaderService.autoLoader();
    await this.ionViewWillEnter();
    await this.activatedRoute.queryParams
      .subscribe(params => {
        console.log('params');
        console.log(params);
        this.getAppointmentAmountDueResponse = JSON.parse(params.getAppointmentAmountDueResponseJSON);
        this.appointmentId = params.appointmentId;
        this.paymentAmount = (this.getAppointmentAmountDueResponse.currentAmountDue / 100);
        this.isGetAppointmentAmountDueResponseLoaded = true;
      });
  }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  async onPayButtonPressed() {
    console.log('onPayButtonPressed');
    const paymentAmount: number = this.paymentAmount;
    const createStripeProductRequest: CreateStripeProductRequest = {
      name: 'Equine Services',
      description: 'Equine Services'
    };
    const createStripeProductResponse: CreateStripeProductResponse =
      await this.stripeService.createStripeProduct(createStripeProductRequest);
    console.log('createStripeProductResponse');
    console.log(createStripeProductResponse);
    const stripeProductId: string = createStripeProductResponse.productId;
    const createStripePriceRequest: CreateStripePriceRequest = {
      unitAmount: this.paymentAmount * 100,
      currency: 'usd',
      productId: stripeProductId
    };
    const createStripePriceResponse: CreateStripePriceResponse =
      await this.stripeService.createStripePrice(createStripePriceRequest);
    const stripePriceId: string = createStripePriceResponse.priceId;
    const createStripePaymentLinkRequest: CreateStripePaymentLinkRequest = {
      priceId: stripePriceId,
      quantity: 1
    };
    const createStripePaymentLinkResponse: CreateStripePaymentLinkResponse =
      await this.stripeService.createStripePaymentLink(createStripePaymentLinkRequest);
    console.log('createStripePaymentLinkResponse');
    console.log(createStripePaymentLinkResponse);
    const paymentLinkId: string = createStripePaymentLinkResponse.paymentLinkId;
    console.log('createStripePaymentLinkResponse');
    console.log(createStripePaymentLinkResponse);
    const stripePaymentLink: StripePaymentLink = createStripePaymentLinkResponse.stripePaymentLink;
    this.stripePaymentLink = stripePaymentLink;
    this.isStripePaymentLinkLoaded = true;
    console.log('stripePaymentLink');
    console.log(stripePaymentLink);
    const stripePaymentLinkUrl: string = stripePaymentLink.url;
    console.log('stripePaymentLinkUrl');
    console.log(stripePaymentLinkUrl);
    //await this.router.navigate([stripePaymentLinkUrl]);
    this.document.location.href = stripePaymentLinkUrl;
  }
}
