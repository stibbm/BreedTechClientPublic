
export class EventWithTimeZone {
  id: number;
  description: string;
  timestamp: number;
  localDateTimeString: string;
  createdByUserId: number;
};

export class Event {
  id: number;
  timestamp: number;
  description: string;
  createdByUserId: number;
};

export type CreateEventWithTimeZoneRequest = {
  timestamp: number;
  description: string;
};

export type CreateEventWithTimeZoneResponse = {
  event: Event;
};

export type GetEventsWithTimeZoneRequest = {
  timeZoneString: string;
};

export type GetEventsWithTimeZoneResponse = {
  eventWithTimeZonesList: EventWithTimeZone[];
};
