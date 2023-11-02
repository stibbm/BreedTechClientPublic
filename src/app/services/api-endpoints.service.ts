import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  CREATE_APPOINTMENT_ACTION_BY_ACTION_TYPE_PATH,
  CREATE_APPOINTMENT_ACTION_PATH,
  CREATE_APPOINTMENT_ACTION_TYPE_PATH,
  CREATE_APPOINTMENT_CONTENT_PATH,
  CREATE_APPOINTMENT_PATH,
  CREATE_APPOINTMENTV2_PATH,
  CREATE_APPOINTMENTV2_URL,
  CREATE_BREEDING_CONTRACT_PATH,
  CREATE_BREEDING_CONTRACT_STRING_PATH,
  CREATE_CHARGE_BY_HORSE_ID_PATH,
  CREATE_CHARGE_PATH,
  CREATE_COMPANY_PATH,
  CREATE_COMPANY_URL,
  CREATE_HORSE_LOCATION_PATH,
  CREATE_HORSE_PATH,
  CREATE_LINE_ITEM_PATH,
  CREATE_SEMEN_COLLECTION_LOG_BY_HORSE_ID_PATH,
  CREATE_SEMEN_COLLECTION_LOG_PATH,
  CREATE_STALL_CONTENT_PATH,
  CREATE_STALL_PATH,
  CREATE_STALL_SIMPLE_PATH,
  CREATE_STALL_SIMPLE_URL,
  CREATE_USER_PATH,
  CREATE_USER_V2_PATH,
  GET_ACTIVE_APPOINTMENTS_BY_HORSE_ID_PATH,
  GET_ALL_APPOINTMENTS_PATH,
  GET_ALL_APPOINTMENTS_URL,
  GET_ALL_COMPANIES_PATH,
  GET_ALL_HORSES_PATH,
  GET_ALL_HORSES_URL,
  GET_ALL_LINE_ITEMS_PATH,
  GET_ALL_STALLS_OCCUPANCY_PATH,
  GET_ALL_STALLS_PATH,
  GET_ALL_USERS_PATH,
  GET_APPOINTMENT_ACTION_TYPE_DISPLAYABLES_PATH,
  GET_APPOINTMENT_ACTION_TYPES_BY_COMPANY_ID_PATH,
  GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_PATH,
  GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_URL,
  GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_V2_PATH,
  GET_APPOINTMENT_ACTIONS_BY_HORSE_ID_PATH,
  GET_APPOINTMENT_ACTIONS_BY_USER_ID_PATH,
  GET_APPOINTMENT_ACTIONS_BY_USER_ID_V2_PATH,
  GET_APPOINTMENT_ACTIONS_PATH,
  GET_APPOINTMENT_ACTIONS_V3_PATH,
  GET_APPOINTMENTS_BY_USER_ID_PATH,
  GET_APPOINTMENTSV2_PATH,
  GET_BREEDING_CONTRACT_BY_ID_PATH,
  GET_BREEDING_CONTRACT_IMAGE_V2_PATH,
  GET_BREEDING_CONTRACT_PATHS_BY_HORSE_ID_PATH,
  GET_BREEDING_CONTRACTS_BY_HORSE_ID_PATH,
  GET_BREEDING_CONTRACTS_BY_HORSE_ID_URL,
  GET_CHARGES_PATH,
  GET_COMPANY_BY_ID_PATH,
  GET_EMPTY_STALLS_PATH,
  GET_HORSE_BY_ID_PATH,
  GET_HORSES_BY_OWNER_ID_PATH,
  GET_HORSES_V2_PATH,
  GET_HORSES_WITH_LOCATION_PATH,
  GET_SEMEN_COLLECTION_LOGS_PATH,
  GET_STALLIONS_PATH,
  GET_USER_BY_AUTH_TOKEN_PATH,
  GET_USER_BY_EMAIL_ADDRESS_PATH,
  GET_USERS_PATH,
  LOGIN_PATH,
  UPDATE_APPOINTMENT_STATUS_PATH,
  MOVE_HORSE_PATH,
  GET_MONTH_DATES_PATH,
  GET_APPOINTMENT_ACTIONS_BY_TIMESTMAP_PATH,
  GET_CONTRACT_IMAGE_PATH,
  CREATE_FILE_PATH,
  GET_FILE_PATH,
  GET_FILE_BY_PATH_PATH,
  GET_FILE_BY_PARENT_PATH,
  GET_EVENTS_WITH_TIME_ZONE_PATH,
  CREATE_EVENT_WITH_TIMESTAMP_PATH,
  CREATE_STRIPE_PAYMENT_LINK_PATH,
  CREATE_STRIPE_PRODUCT_PATH,
  CREATE_STRIPE_PRICE_PATH,
  GET_STRIPE_PRODUCT_PATH,
  GET_STRIPE_PRICE_PATH,
  GET_APPOINTMENT_AMOUNT_DUE_PATH,
  GET_STRIPE_PAYMENT_LINK_PATH,
  GET_APPOINTMENT_V2_BY_ID_PATH,
  GET_APPOINTMENT_BY_USER_ID,
  GET_APPOINTMENTS_BY_HORSE_ID_PATH, GET_HORSES_WITH_ACTIVE_APPOINTMENT_PATH
} from '../constants/routes';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  constructor() { }

  async getBaseUrl(): Promise<string> {
    const baseUrl: string = environment.baseUrl;
    console.log('baseUrl used: ' + baseUrl);
    return baseUrl;
  }

  async getContentUrl(): Promise<string> {
    const contentUrl: string = environment.contentUrl;
    console.log('contentUrl used: ' + contentUrl);
    return contentUrl;
  }

  async createStallPath(): Promise<string> {
    const createStallUrl: string = await this.getBaseUrl() + CREATE_STALL_PATH;
    return createStallUrl;
  }

  async getAllStalls(): Promise<string> {
    const getAllStallsUrl: string = await this.getBaseUrl() + GET_ALL_STALLS_PATH;
    return getAllStallsUrl;
  }

  async getEmptyStalls(): Promise<string> {
    const getEmptyStallsUrl: string = await this.getBaseUrl() + GET_EMPTY_STALLS_PATH;
    return getEmptyStallsUrl;
  }

  async createStallContent(): Promise<string> {
    const createStallContentUrl: string = await this.getContentUrl() + CREATE_STALL_CONTENT_PATH;
    return createStallContentUrl;
  }

  async createHorse(): Promise<string> {
    const createHorseUrl: string = await this.getBaseUrl() + CREATE_HORSE_PATH;
    return createHorseUrl;
  }

  async getAllHorses(): Promise<string> {
    const getAllHorsesUrl: string = await this.getBaseUrl() + GET_ALL_HORSES_PATH;
    return getAllHorsesUrl;
  }

  async getHorsesByOwnerId(): Promise<string> {
    const getHorsesByOwnerIdUrl: string = await this.getBaseUrl() + GET_HORSES_BY_OWNER_ID_PATH;
    return getHorsesByOwnerIdUrl;
  }

  async getHorseById(): Promise<string> {
    const getHorseByIdUrl: string = await this.getBaseUrl() + GET_HORSE_BY_ID_PATH;
    return getHorseByIdUrl;
  }

  async createAppointment(): Promise<string> {
    const createAppointmentUrl: string = await this.getBaseUrl() + CREATE_APPOINTMENT_PATH;
    return createAppointmentUrl;
  }

  async getAllAppointments(): Promise<string> {
    const getAllAppointmentsUrl: string = await this.getBaseUrl() + GET_ALL_APPOINTMENTS_PATH;
    return getAllAppointmentsUrl;
  }

  async createAppointmentContent(): Promise<string> {
    const createAppointmentContentUrl: string = await this.getContentUrl() + CREATE_APPOINTMENT_CONTENT_PATH;
    return createAppointmentContentUrl;
  }

  async createLineItem(): Promise<string> {
    const createLineItemUrl: string = await this.getBaseUrl() + CREATE_LINE_ITEM_PATH;
    return createLineItemUrl;
  }

  async getAllLineItems(): Promise<string> {
    const getAllLineItemsUrl: string = await this.getBaseUrl() + GET_ALL_LINE_ITEMS_PATH;
    return getAllLineItemsUrl;
  }

  async getUserByEmailAddress(): Promise<string> {
    const getUserByEmailAddressUrl: string = await this.getBaseUrl() + GET_USER_BY_EMAIL_ADDRESS_PATH;
    return getUserByEmailAddressUrl;
  }

  async getAllUsers(): Promise<string> {
    const getAllUsersUrl: string = await this.getBaseUrl() + GET_ALL_USERS_PATH;
    return getAllUsersUrl;
  }

  async getUsers(): Promise<string> {
    const getUsersUrl: string = await this.getBaseUrl() + GET_USERS_PATH;
    return getUsersUrl;
  }

  async createUser(): Promise<string> {
    const createUserUrl: string = await this.getBaseUrl() + CREATE_USER_PATH;
    return createUserUrl;
  }

  async createCompany(): Promise<string> {
    const createCompanyUrl: string = await this.getBaseUrl() + CREATE_COMPANY_PATH;
    return createCompanyUrl;
  }

  async getAllCompanies(): Promise<string> {
    const getAllCompaniesUrl: string = await this.getBaseUrl() + GET_ALL_COMPANIES_PATH;
    return getAllCompaniesUrl;
  }

  async getCompanyById(): Promise<string> {
    const getCompanyByIdUrl: string = await this.getBaseUrl() + GET_COMPANY_BY_ID_PATH;
    return getCompanyByIdUrl;
  }

  async createHorseLocation(): Promise<string> {
    const createHorseLocationUrl: string = await this.getBaseUrl() + CREATE_HORSE_LOCATION_PATH;
    return createHorseLocationUrl;
  }

  async getAllHorseLocations(): Promise<string> {
    const getAllHorseLocationsUrl: string = await this.getBaseUrl() + GET_ALL_HORSES_PATH;
    return getAllHorseLocationsUrl;
  }

  async getAllStallsOccupancy(): Promise<string> {
    const getAllStallsOccupancyUrl: string = await this.getBaseUrl() + GET_ALL_STALLS_OCCUPANCY_PATH;
    return getAllStallsOccupancyUrl;
  }

  async getActiveAppointmentsByHorseId(): Promise<string> {
    const getActiveAppointmentsByHorseIdUrl: string = await this.getBaseUrl() + GET_ACTIVE_APPOINTMENTS_BY_HORSE_ID_PATH;
    return getActiveAppointmentsByHorseIdUrl;
  }

  async getLogin(): Promise<string> {
    const loginUrl: string = await this.getBaseUrl() + LOGIN_PATH;
    return loginUrl;
  }

  async getUserByAuthToken(): Promise<string> {
    const getUserByAuthTokenUrl: string = await this.getBaseUrl() + GET_USER_BY_AUTH_TOKEN_PATH;
    return getUserByAuthTokenUrl;
  }

  async getHorsesWithLocation(): Promise<string> {
    const getHorsesWithLocationUrl: string = await this.getBaseUrl() + GET_HORSES_WITH_LOCATION_PATH;
    return getHorsesWithLocationUrl;
  }

  async createAppointmentV2(): Promise<string> {
    const createAppointmentV2Url: string = await this.getBaseUrl() + CREATE_APPOINTMENTV2_PATH;
    return createAppointmentV2Url;
  }

  async getAppointmentsV2(): Promise<string> {
    const getAppointmentsV2Url: string = await this.getBaseUrl() + GET_APPOINTMENTSV2_PATH;
    return getAppointmentsV2Url;
  }

  async createAppointmentAction(): Promise<string> {
    const createAppointmentActionUrl: string = await this.getBaseUrl() + CREATE_APPOINTMENT_ACTION_PATH;
    return createAppointmentActionUrl;
  }

  async getAppointmentActionsByAppointmentId(): Promise<string> {
    const getAppointmentActionsByAppointmentIdUrl: string = await this.getBaseUrl() + GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_PATH;
    return getAppointmentActionsByAppointmentIdUrl;
  }

  async getStallions(): Promise<string> {
    const getStallionsUrl: string = await this.getBaseUrl() + GET_STALLIONS_PATH;
    return getStallionsUrl;
  }

  async updateAppointmentStatus(): Promise<string> {
    const updateAppointmentStatusUrl: string = await this.getBaseUrl() + UPDATE_APPOINTMENT_STATUS_PATH;
    return updateAppointmentStatusUrl;
  }

  async createCharge(): Promise<string> {
    const createChargeUrl: string = await this.getBaseUrl() + CREATE_CHARGE_PATH;
    return createChargeUrl;
  }

  async getCharges(): Promise<string> {
    const getChargesUrl: string = await this.getBaseUrl() + GET_CHARGES_PATH;
    return getChargesUrl;
  }

  async createChargeByHorseId(): Promise<string> {
    const createChargeByHorseIdUrl: string = await this.getBaseUrl() + CREATE_CHARGE_BY_HORSE_ID_PATH;
    return createChargeByHorseIdUrl;
  }

  async createSemenCollectionLog(): Promise<string> {
    const createSemenCollectionLogUrl: string = await this.getBaseUrl() + CREATE_SEMEN_COLLECTION_LOG_PATH;
    return createSemenCollectionLogUrl;
  }

  async createSemenCollectionLogByHorseId(): Promise<string> {
    const createSemenCollectionLogByHorseIdUrl: string = await this.getBaseUrl() + CREATE_SEMEN_COLLECTION_LOG_BY_HORSE_ID_PATH;
    return createSemenCollectionLogByHorseIdUrl;
  }

  async getAppointmentActions(): Promise<string> {
    const getAppointmentActionsUrl: string = await this.getBaseUrl() + GET_APPOINTMENT_ACTIONS_PATH;
    return getAppointmentActionsUrl;
  }

  async createStallSimple(): Promise<string> {
    const createStallSimpleUrl: string = await this.getBaseUrl() + CREATE_STALL_SIMPLE_PATH;
    return createStallSimpleUrl;
  }

  async createAppointmentActionType(): Promise<string> {
    const createAppointmentActionTypeUrl: string = await this.getBaseUrl() + CREATE_APPOINTMENT_ACTION_TYPE_PATH;
    return createAppointmentActionTypeUrl;
  }

  async getAppointmentActionTypesByCompanyId(): Promise<string> {
    const getAppointmentActionTypesByCompanyIdUrl: string = await this.getBaseUrl() + GET_APPOINTMENT_ACTION_TYPES_BY_COMPANY_ID_PATH;
    return getAppointmentActionTypesByCompanyIdUrl;
  }

  async getAppointmentActionTypeDisplayables(): Promise<string> {
    const getAppointmentActionTypeDisplayables: string = await this.getBaseUrl() + GET_APPOINTMENT_ACTION_TYPE_DISPLAYABLES_PATH;
    return getAppointmentActionTypeDisplayables;
  }

  async createAppointmentActionByActionType(): Promise<string> {
    const createAppointmentActionByActionTypeUrl: string = await this.getBaseUrl() + CREATE_APPOINTMENT_ACTION_BY_ACTION_TYPE_PATH;
    return createAppointmentActionByActionTypeUrl;
  }

  async getAppointmentActionsV3(): Promise<string> {
    const getAppointmentActionsV3: string = await this.getBaseUrl() + GET_APPOINTMENT_ACTIONS_V3_PATH;
    return getAppointmentActionsV3;
  }

  async getAppointmentActionsByAppointmentIdV2(): Promise<string> {
    const getAppointmentActionsByAppointmentIdV2Url: string = await this.getBaseUrl()
      + GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_V2_PATH;
    return getAppointmentActionsByAppointmentIdV2Url;
  }

  async getHorsesV2(): Promise<string> {
    const getHorsesV2: string = await this.getBaseUrl() + GET_HORSES_V2_PATH;
    return getHorsesV2;
  }

  async createUserV2(): Promise<string> {
    const createUserV2Url: string = await this.getBaseUrl() + CREATE_USER_V2_PATH;
    return createUserV2Url;
  }

  async createBreedingContract(): Promise<string> {
    const createBreedingContractUrl: string = await this.getBaseUrl() + CREATE_BREEDING_CONTRACT_PATH;
    return createBreedingContractUrl;
  }

  async createBreedingContractString(): Promise<string> {
    const createBreedingContractStringUrl: string = await this.getBaseUrl() + CREATE_BREEDING_CONTRACT_STRING_PATH;
    return createBreedingContractStringUrl;
  }

  async getBreedingContractById(): Promise<string> {
    const getBreedingContractUrl: string = await this.getBaseUrl() + GET_BREEDING_CONTRACT_BY_ID_PATH;
    return getBreedingContractUrl;
  }

  async getBreedingContractsByHorseId(): Promise<string> {
    const getBreedingContractsByHorseIdUrl: string = await this.getBaseUrl() + GET_BREEDING_CONTRACTS_BY_HORSE_ID_PATH;
    return getBreedingContractsByHorseIdUrl;
  }

  async getBreedingContractPathsByHorseId(): Promise<string> {
    const getBreedingContractPathsByHorseIdUrl: string = await this.getBaseUrl() + GET_BREEDING_CONTRACT_PATHS_BY_HORSE_ID_PATH;
    return getBreedingContractPathsByHorseIdUrl;
  }

  async getBreedingContractImageV2(): Promise<string> {
    const getBreedingContractImageV2Url: string = await this.getBaseUrl() + GET_BREEDING_CONTRACT_IMAGE_V2_PATH;
    return getBreedingContractImageV2Url;
  }

  async getAppointmentActionsByHorseId(): Promise<string> {
    const getAppointmentActionsByHorseIdUrl: string = await this.getBaseUrl() + GET_APPOINTMENT_ACTIONS_BY_HORSE_ID_PATH;
    return getAppointmentActionsByHorseIdUrl;
  }

  async getSemenCollectionLogs(): Promise<string> {
    const getSemenCollectionLogsUrl: string = await this.getBaseUrl() + GET_SEMEN_COLLECTION_LOGS_PATH;
    return getSemenCollectionLogsUrl;
  }

  async createStall(): Promise<string> {
    const createStallUrl: string = await this.getBaseUrl() + CREATE_STALL_PATH;
    return createStallUrl;
  }

  async getAppointmentsByUserId(): Promise<string> {
    const getAppointmentsByUserIdUrl: string = await this.getBaseUrl() + GET_APPOINTMENTS_BY_USER_ID_PATH;
    return getAppointmentsByUserIdUrl;
  }

  async getAppointmentActionsByUserId(): Promise<string> {
    const getAppointmentActionsByUserIdUrl: string = await this.getBaseUrl() + GET_APPOINTMENT_ACTIONS_BY_USER_ID_PATH;
    return getAppointmentActionsByUserIdUrl;
  }

  async getAppointmentActionsByUserIdV2(): Promise<string> {
    const getAppointmentActionsByUserIdV2Url: string = await this.getBaseUrl() + GET_APPOINTMENT_ACTIONS_BY_USER_ID_V2_PATH;
    return getAppointmentActionsByUserIdV2Url;
  }

  async moveHorse(): Promise<string> {
    const moveHorseUrl: string = await this.getBaseUrl() + MOVE_HORSE_PATH;
    return moveHorseUrl;
  }

  async getMonthDates(): Promise<string> {
    const getMonthDatesUrl: string = await this.getBaseUrl() + GET_MONTH_DATES_PATH;
    return getMonthDatesUrl;
  }

  async getAppointmentActionsByTimestamp(): Promise<string> {
    const getAppointmentActionsByTimestampUrl: string = await this.getBaseUrl() + GET_APPOINTMENT_ACTIONS_BY_TIMESTMAP_PATH;
    return getAppointmentActionsByTimestampUrl;
  }

  async getContractImage(): Promise<string> {
    const getContractImageUrl: string = await this.getBaseUrl() + GET_CONTRACT_IMAGE_PATH;
    return getContractImageUrl;
  }

  async createFile(): Promise<string> {
    const createFileUrl: string = await this.getBaseUrl() + CREATE_FILE_PATH;
    return createFileUrl;
  }

  async getFile(): Promise<string> {
    const getFileUrl: string = await this.getBaseUrl() + GET_FILE_PATH;
    return getFileUrl;
  }

  async getFileByPath(): Promise<string> {
    const getFileByPathUrl: string = await this.getBaseUrl() + GET_FILE_BY_PATH_PATH;
    return getFileByPathUrl;
  }

  async getFilesByParent(): Promise<string> {
    const getFileByPathUrl: string = await this.getBaseUrl() + GET_FILE_BY_PARENT_PATH;
    return getFileByPathUrl;
  }

  async getEventsWithTimeZone(): Promise<string> {
    const getEventsWithTimeZoneUrl: string = await this.getBaseUrl() + GET_EVENTS_WITH_TIME_ZONE_PATH;
    return getEventsWithTimeZoneUrl;
  }

  async createEventWithTimestamp(): Promise<string> {
    const createEventWithTimestampUrl: string = await this.getBaseUrl() + CREATE_EVENT_WITH_TIMESTAMP_PATH;
    return createEventWithTimestampUrl;
  }

  async createStripePaymentLink(): Promise<string> {
    const createStripePaymentLinkUrl: string = await this.getBaseUrl() + CREATE_STRIPE_PAYMENT_LINK_PATH;
    return createStripePaymentLinkUrl;
  }

  async createStripeProduct(): Promise<string> {
    const createStripeProductUrl: string = await this.getBaseUrl() + CREATE_STRIPE_PRODUCT_PATH;
    return createStripeProductUrl;
  }

  async createStripePrice(): Promise<string> {
    const createStripePriceUrl: string = await this.getBaseUrl() + CREATE_STRIPE_PRICE_PATH;
    return createStripePriceUrl;
  }

  async getStripeProduct(): Promise<string> {
    const getStripeProductUrl: string = await this.getBaseUrl() + GET_STRIPE_PRODUCT_PATH;
    return getStripeProductUrl;
  }

  async getStripePrice(): Promise<string> {
    const getStripePriceUrl: string = await this.getBaseUrl() + GET_STRIPE_PRICE_PATH;
    return getStripePriceUrl;
  }

  async getAppointmentAmountDue(): Promise<string> {
    const getAppointmentAmountDueUrl: string = await this.getBaseUrl() + GET_APPOINTMENT_AMOUNT_DUE_PATH;
    return getAppointmentAmountDueUrl;
  }

  async getStripePaymentLink(): Promise<string> {
    const getStripePaymentLinkUrl: string = await this.getBaseUrl() + GET_STRIPE_PAYMENT_LINK_PATH;
    return getStripePaymentLinkUrl;
  }

  async getAppointmentV2ById(): Promise<string> {
    const getAppointmentV2ByUrl: string = await this.getBaseUrl() + GET_APPOINTMENT_V2_BY_ID_PATH;
    return getAppointmentV2ByUrl;
  }

  async getAppointmentsByHorseId(): Promise<string> {
    const getAppointmentsByHorseIdUrl: string = await this.getBaseUrl() + GET_APPOINTMENTS_BY_HORSE_ID_PATH;
    return getAppointmentsByHorseIdUrl;
  }

  async getHorsesWithActiveAppointment(): Promise<string> {
    const getHorsesWithActiveAppointmentUrl: string = await this.getBaseUrl() + GET_HORSES_WITH_ACTIVE_APPOINTMENT_PATH;
    return getHorsesWithActiveAppointmentUrl;
  }

}






