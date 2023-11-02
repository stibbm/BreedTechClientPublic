
export class StripePaymentLink {
  active: boolean;
  allowPromotionCodes: boolean;
  billingAddressCollection: string;
  currency: string;
  customerCreation: string;
  id: string;
  liveMode: boolean;
  object: string;
  paymentMethodCollection: string;
  submitType: string;
  url: string;
}

export type CreateStripePaymentLinkRequest = {
  priceId: string;
  quantity: number;
};

export type CreateStripePaymentLinkResponse = {
  paymentLinkId: string;
  stripePaymentLink: StripePaymentLink;
};

export type GetStripePaymentLinkRequest = {
  stripePaymentLinkId: string;
};

export type GetStripePaymentLinkResponse = {
  stripePaymentLink: StripePaymentLink;
};


