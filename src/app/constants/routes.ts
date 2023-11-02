//export const BASE_URL: string = 'http://localhost:9123';
//export const BASE_URL: string = 'http://35.175.190.129:9123';
//export const BASE_URL: string = 'https://ajzwzjo3sd.execute-api.us-east-1.amazonaws.com';
export const BASE_URL: string = 'https://i1yoe704m7.execute-api.us-east-1.amazonaws.com';
export const CONTENT_BASE_URL: string = 'https://i1yoe704m7.execute-api.us-east-1.amazonaws.com';

//export const CONTENT_BASE_URL: string = 'https://ajzwzjo3sd.execute-api.us-east-1.amazonaws.com';
//export const CONTENT_BASE_URL: string = 'http://localhost:9124';
//export const CONTENT_BASE_URL: string = 'http://35.175.190.129:9124';
export const CREATE_STALL_PATH: string = '/createStall';
export const CREATE_STALL_URL: string = BASE_URL + CREATE_STALL_PATH;

export const GET_ALL_STALLS_PATH: string = '/getAllStalls';
export const GET_ALL_STALLS_URL: string = BASE_URL + GET_ALL_STALLS_PATH;

export const GET_EMPTY_STALLS_PATH: string = '/getEmptyStalls';
export const GET_EMPTY_STALLS_URL: string = BASE_URL + GET_EMPTY_STALLS_PATH;

export const CREATE_STALL_CONTENT_PATH: string = '/createStallContent';
export const CREATE_STALL_CONTENT_URL: string = CONTENT_BASE_URL + CREATE_STALL_CONTENT_PATH;

export const CREATE_HORSE_PATH: string = '/createHorse';
export const CREATE_HORSE_URL: string = BASE_URL + CREATE_HORSE_PATH;

export const GET_ALL_HORSES_PATH: string = '/getAllHorses';
export const GET_ALL_HORSES_URL: string = BASE_URL + GET_ALL_HORSES_PATH;

export const GET_HORSES_BY_OWNER_ID_PATH: string = '/getHorsesByOwnerId';
export const GET_HORSES_BY_OWNER_ID_URL: string = BASE_URL + GET_HORSES_BY_OWNER_ID_PATH;

export const GET_HORSE_BY_ID_PATH: string = '/getHorseById';
export const GET_HORSE_BY_ID_URL: string = BASE_URL + GET_HORSE_BY_ID_PATH;

export const CREATE_APPOINTMENT_PATH: string = '/createAppointment';
export const CREATE_APPOINTMENT_URL: string = BASE_URL + CREATE_APPOINTMENT_PATH;

export const GET_ALL_APPOINTMENTS_PATH: string = '/getAllAppointments';
export const GET_ALL_APPOINTMENTS_URL: string = BASE_URL + GET_ALL_APPOINTMENTS_PATH;

export const CREATE_APPOINTMENT_CONTENT_PATH: string = '/createAppointmentContent';
export const CREATE_APPOINTMENT_CONTENT_URL: string = CONTENT_BASE_URL + CREATE_APPOINTMENT_CONTENT_PATH;

export const CREATE_LINE_ITEM_PATH: string = '/createLineItem';
export const CREATE_LINE_ITEM_URL: string = BASE_URL + CREATE_LINE_ITEM_PATH;

export const GET_ALL_LINE_ITEMS_PATH: string = '/getAllLineItems';
export const GET_ALL_LINE_ITEMS_URL = BASE_URL + GET_ALL_LINE_ITEMS_PATH;

export const GET_USER_BY_EMAIL_ADDRESS_PATH: string = '/getUserByEmailAddress';
export const GET_USER_BY_EMAIL_ADDRESS_URL: string = BASE_URL + GET_USER_BY_EMAIL_ADDRESS_PATH;

export const GET_ALL_USERS_PATH: string = '/getAllUsers';
export const GET_ALL_USERS_URL: string = BASE_URL + GET_ALL_USERS_PATH;

export const CREATE_USER_PATH: string = '/createUser';
export const CREATE_USER_URL: string = BASE_URL + CREATE_USER_PATH;

export const GET_USERS_PATH: string = '/getUsers';
export const GET_USERS_URL: string = BASE_URL + GET_USERS_PATH;


export const CREATE_COMPANY_PATH: string = '/createCompany';
export const CREATE_COMPANY_URL = BASE_URL + CREATE_COMPANY_PATH;

export const GET_ALL_COMPANIES_PATH: string = '/getAllCompanies';
export const GET_ALL_COMPANIES_URL: string = BASE_URL + GET_ALL_COMPANIES_PATH;

export const GET_COMPANY_BY_ID_PATH: string = '/getCompanyById';
export const GET_COMPANY_BY_ID_URL: string = BASE_URL + GET_COMPANY_BY_ID_PATH;

export const CREATE_HORSE_LOCATION_PATH: string = '/createHorseLocation';
export const CREATE_HORSE_LOCATION_URL: string = BASE_URL + CREATE_HORSE_LOCATION_PATH;

export const GET_ALL_HORSE_LOCATIONS_PATH: string = '/getAllHorseLocations';
export const GET_ALL_HORSE_LOCATIONS_URL: string = BASE_URL + GET_ALL_HORSE_LOCATIONS_PATH;

export const GET_ALL_STALLS_OCCUPANCY_PATH: string = '/getAllStallsOccupancy';
export const GET_ALL_STALLS_OCCUPANCY_URL: string = BASE_URL + GET_ALL_STALLS_OCCUPANCY_PATH;

export const GET_ACTIVE_APPOINTMENTS_BY_HORSE_ID_PATH: string = '/getActiveAppointmentsByHorseId';
export const GET_ACTIVE_APPOINTMENTS_BY_HORSE_ID_URL: string = BASE_URL + GET_ACTIVE_APPOINTMENTS_BY_HORSE_ID_PATH;

export const LOGIN_PATH: string = '/login';
export const LOGIN_URL: string = BASE_URL + LOGIN_PATH;

export const GET_USER_BY_AUTH_TOKEN_PATH: string = '/getUserByAuthToken';
export const GET_USER_BY_AUTH_TOKEN_URL: string = BASE_URL + GET_USER_BY_AUTH_TOKEN_PATH;

export const GET_HORSES_WITH_LOCATION_PATH: string = '/getHorsesWithLocation';
export const GET_HORSES_WITH_LOCATION_URL = BASE_URL + GET_HORSES_WITH_LOCATION_PATH;

export const CREATE_APPOINTMENTV2_PATH: string = '/createAppointmentV2';
export const CREATE_APPOINTMENTV2_URL: string = BASE_URL + CREATE_APPOINTMENTV2_PATH;

export const GET_APPOINTMENTSV2_PATH: string = '/getAppointmentsV2';
export const GET_APPOINTMENTSV2_URL: string = BASE_URL + GET_APPOINTMENTSV2_PATH;

export const CREATE_APPOINTMENT_ACTION_PATH: string = '/createAppointmentAction';
export const CREATE_APPOINTMENT_ACTION_URL: string = BASE_URL + CREATE_APPOINTMENT_ACTION_PATH;

export const GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_PATH: string = '/getAppointmentActionsByAppointmentId';
export const GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_URL: string = BASE_URL + GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_PATH;

export const GET_STALLIONS_PATH: string = '/getStallions';
export const GET_STALLIONS_URL: string = BASE_URL + GET_STALLIONS_PATH;

export const UPDATE_APPOINTMENT_STATUS_PATH: string = '/updateAppointmentStatus';
export const UPDATE_APPOINTMENT_STATUS_URL: string = BASE_URL + UPDATE_APPOINTMENT_STATUS_PATH;

export const CREATE_CHARGE_PATH: string = '/createCharge';
export const CREATE_CHARGE_URL: string = BASE_URL + CREATE_CHARGE_PATH;

export const GET_CHARGES_PATH: string = '/getCharges';
export const GET_CHARGES_URL: string = BASE_URL + CREATE_CHARGE_PATH;

export const CREATE_CHARGE_BY_HORSE_ID_PATH: string = '/createChargeByHorseId';
export const CREATE_CHARGE_BY_HORSE_ID_URL: string = BASE_URL + CREATE_CHARGE_BY_HORSE_ID_PATH;

export const CREATE_SEMEN_COLLECTION_LOG_PATH: string = '/createSemenCollectionLog';
export const CREATE_SEMEN_COLLECTION_LOG_URL: string = BASE_URL + CREATE_SEMEN_COLLECTION_LOG_PATH;

export const GET_SEMEN_COLLECTION_LOGS_PATH: string = '/getSemenCollectionLogs';
export const GET_SEMEN_COLLECTION_LOGS_URL: string = BASE_URL + CREATE_SEMEN_COLLECTION_LOG_PATH;

export const CREATE_SEMEN_COLLECTION_LOG_BY_HORSE_ID_PATH = '/createSemenCollectionLogByHorseId';
export const CREATE_SEMEN_COLLECTION_LOG_BY_HORSE_ID_URL = BASE_URL + CREATE_SEMEN_COLLECTION_LOG_BY_HORSE_ID_PATH;

export const GET_APPOINTMENT_ACTIONS_PATH: string = '/getAppointmentActions';
export const GET_APPOINTMENT_ACTIONS_URL: string = BASE_URL + GET_APPOINTMENT_ACTIONS_PATH;

export const CREATE_STALL_SIMPLE_PATH: string = '/createStallSimple';
export const CREATE_STALL_SIMPLE_URL: string = BASE_URL + CREATE_STALL_SIMPLE_PATH;

export const CREATE_APPOINTMENT_ACTION_TYPE_PATH: string = '/createAppointmentActionType';
export const CREATE_APPOINTMENT_ACTION_TYPE_URL: string = BASE_URL + CREATE_APPOINTMENT_ACTION_TYPE_PATH;

export const GET_APPOINTMENT_ACTION_TYPES_BY_COMPANY_ID_PATH: string = '/getAppointmentActionTypesByCompanyId';
export const GET_APPOINTMENT_ACTION_TYPES_BY_COMPANY_ID_URL: string = BASE_URL + GET_APPOINTMENT_ACTION_TYPES_BY_COMPANY_ID_PATH;

export const GET_APPOINTMENT_ACTION_TYPE_DISPLAYABLES_PATH: string = '/getAppointmentActionTypeDisplayables';
export const GET_APPOINTMENT_ACTION_TYPE_DISPLAYABLES_URL: string = BASE_URL + GET_APPOINTMENT_ACTION_TYPE_DISPLAYABLES_PATH;

export const CREATE_APPOINTMENT_ACTION_BY_ACTION_TYPE_PATH: string = '/createAppointmentActionByActionTypeId';
export const CREATE_APPOINTMENT_ACTION_BY_ACTION_TYPE_URL: string = BASE_URL + CREATE_APPOINTMENT_ACTION_BY_ACTION_TYPE_PATH;

export const GET_APPOINTMENT_ACTIONS_V3_PATH: string = '/getAppointmentActionsV3';
export const GET_APPOINTMENT_ACTIONS_V3_URL: string = BASE_URL + GET_APPOINTMENT_ACTIONS_V3_PATH;

export const GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_V2_PATH: string = '/getAppointmentActionsByAppointmentIdV2';
export const GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_V2_URL: string = BASE_URL + GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_V2_PATH;

export const GET_HORSES_V2_PATH: string = "/getHorsesV2";
export const GET_HORSES_V2_URL: string = BASE_URL + GET_HORSES_V2_PATH;

export const CREATE_USER_V2_PATH: string = "/createUserV2";
export const CREATE_USER_V2_URL: string = BASE_URL + CREATE_USER_V2_PATH;

export const CREATE_BREEDING_CONTRACT_PATH: string = "/createBreedingContract";
export const CREATE_BREEDING_CONTRACT_URL: string = BASE_URL + CREATE_BREEDING_CONTRACT_PATH;

export const CREATE_BREEDING_CONTRACT_STRING_PATH: string = "/createBreedingContractString";
export const CREATE_BREEDING_CONTRACT_STRING_URL: string = BASE_URL + CREATE_BREEDING_CONTRACT_STRING_PATH;

export const GET_BREEDING_CONTRACT_BY_ID_PATH: string = '/getBreedingContractByIdPath';
export const GET_BREEDING_CONTRACT_BY_ID_URL: string = BASE_URL + GET_BREEDING_CONTRACT_BY_ID_PATH;

export const GET_BREEDING_CONTRACTS_BY_HORSE_ID_PATH: string = '/getBreedingContractsByHorseId';
export const GET_BREEDING_CONTRACTS_BY_HORSE_ID_URL: string = BASE_URL + GET_BREEDING_CONTRACTS_BY_HORSE_ID_PATH;

export const GET_BREEDING_CONTRACT_PATHS_BY_HORSE_ID_PATH: string = '/getBreedingContractPathsByHorseId';
export const GET_BREEDING_CONTRACT_PATHS_BY_HORSE_ID_URL: string = BASE_URL + GET_BREEDING_CONTRACT_PATHS_BY_HORSE_ID_PATH;

export const GET_BREEDING_CONTRACT_IMAGE_V2_PATH: string = '/getBreedingContractImageV2';
export const GET_BREEDING_CONTRACT_IMAGE_V2_URL: string = BASE_URL + GET_BREEDING_CONTRACT_IMAGE_V2_PATH;

export const GET_APPOINTMENT_ACTIONS_BY_HORSE_ID_PATH: string = '/getAppointmentActionsByHorseId';

export const GET_APPOINTMENTS_BY_USER_ID_PATH: string = '/getAppointmentsByUserId';
export const GET_APPOINTMENT_ACTIONS_BY_USER_ID_PATH: string = '/getAppointmentActionsByUserId';

export const GET_APPOINTMENT_ACTIONS_BY_USER_ID_V2_PATH: string = '/getAppointmentActionsByUserIdV2';

export const MOVE_HORSE_PATH: string = '/moveHorse';

export const GET_MONTH_DATES_PATH: string = '/getMonthDates';
export const GET_APPOINTMENT_ACTIONS_BY_TIMESTMAP_PATH: string = '/getAppointmentActionsByTimestamp';

export const GET_CONTRACT_IMAGE_PATH: string = '/getContractImage';
export const CREATE_FILE_PATH: string = '/createFile';
export const GET_FILE_PATH: string = '/getFile';

export const GET_FILE_BY_PATH_PATH: string = '/getFileByPath';
export const GET_FILE_BY_PARENT_PATH: string = '/getFilesByParent';
export const GET_EVENTS_WITH_TIME_ZONE_PATH: string = '/getEventsWithTimeZone';
export const CREATE_EVENT_WITH_TIMESTAMP_PATH: string = '/createEventWithTimestamp';
export const CREATE_STRIPE_PAYMENT_LINK_PATH: string = '/createStripePaymentLink';
export const CREATE_STRIPE_PRODUCT_PATH: string = '/createStripeProduct';
export const CREATE_STRIPE_PRICE_PATH: string = '/createStripePrice';
export const GET_STRIPE_PRODUCT_PATH: string = '/getStripeProduct';
export const GET_STRIPE_PRICE_PATH: string = '/getStripePrice';
export const GET_APPOINTMENT_AMOUNT_DUE_PATH: string = '/getAppointmentAmountDue';
export const GET_STRIPE_PAYMENT_LINK_PATH: string = '/getStripePaymentLink';
export const GET_APPOINTMENT_V2_BY_ID_PATH: string = '/getAppointmentV2ById';
export const GET_APPOINTMENT_BY_USER_ID: string = '/getAppointmentByUserId';
export const GET_APPOINTMENTS_BY_HORSE_ID_PATH: string = '/getAppointmentsByHorseId';
export const GET_HORSES_WITH_ACTIVE_APPOINTMENT_PATH: string = '/getHorsesWithActiveAppointment';


