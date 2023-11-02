
export class LineItem {
  id: number;
  appointmentId: number;
  servicesDescription: number;
  amountDue: number;
  minimumToBeginServices: number;
  createdByUserId: number;
};

export type CreateLineItemRequest = {
  appointmentId: number;
  servicesDescription: string;
  amountDue: number;
  minimumToBeginServices: number;
  createdByUserId: number;
};

export type CreateLineItemResponse = {
  lineItem: LineItem;
};

export type GetAllLineItemsResponse = {
  lineItemsList: LineItem[];
};


