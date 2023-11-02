

export class Charge {
  id: number;
  appointmentId: number;
  createdByUserId: number;
  amountCents: number;
  timestamp: number;
}

export type CreateChargeRequest = {
  appointmentId: number;
  createdByUserId: number;
  amountByUserId: number;
  amountCents: number;
  timestamp: number;
};

export type CreateChargeResponse = {
  charge: Charge;
};

export type CreateChargeByHorseIdRequest = {
  horseId: number;
  amountCents: number;
};

export type CreateChargeByHorseIdResponse = {
  charge: Charge;
}

export type GetChargesResponse = {
  chargesList: Charge[];
};

export type GetChargesByUserIdRequest = {
  userId: number;
};

export type GetChargesByUserIdResponse = {
  chargesList: Charge[];
};
