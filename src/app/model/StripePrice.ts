
export class StripePrice {
  id: string;
  created: number;
  currency: string;
  nickname: string;
  unitAmount: number;
  type: string;
  taxBehavior: string;
}

export type CreateStripePriceRequest = {
  unitAmount: number;
  currency: string;
  productId: string;
};

export type CreateStripePriceResponse = {
  priceId: string;
  stripePrice: StripePrice;
};

export type GetStripePriceRequest = {
  priceId: string;
};

export type GetStripePriceResponse = {
  stripePrice: StripePrice;
};

