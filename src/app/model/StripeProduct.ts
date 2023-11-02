
export class StripeProduct {
  id: string;
  name: string;
  description: string;
  type: string;
  created: number;
  caption: string;
}

export type CreateStripeProductRequest = {
  name: string;
  description: string;
};

export type CreateStripeProductResponse = {
  productId: string;
  stripeProduct: StripeProduct;
};

export type GetStripeProductRequest = {
  productId: string;
};

export type GetStripeProductResponse = {
  stripeProduct: StripeProduct;
};
