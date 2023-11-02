
export class CalendarDate {
  dayOfWeekName: string;
  dayOfMonthNumber: number;
  monthName: string;
  year: number;
}

export type GetMonthDatesRequest = {
  yearNumber: number;
  monthNumber: number;
};

export type GetMonthDatesResponse = {
  calendarDatesList: CalendarDate[];
};
