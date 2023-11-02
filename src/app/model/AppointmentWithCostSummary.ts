export type AppointmentWithCostSummary = {
  id: number;
  horseName: string;
  status: string;
  amountDueDollarsReadable: string;
  amountPaidDollarsReadable: string;
  remainingAmountDueDollarsReadable: string;
  userFirstAndLastName: string;
  createdByUserFirstAndLastName: string;
};

/* note:

  -> Make the table / list of an object type be displayed as a list
  -> instead of as a table

  -> Leave the details tables as is though

 */
