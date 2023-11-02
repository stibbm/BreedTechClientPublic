import { Injectable } from '@angular/core';
import {AppointmentActionService} from '../services/appointment-action.service';
import {
  AppointmentAction,
  AppointmentActionV3,
  CreateAppointmentActionByActionTypeRequest,
  CreateAppointmentActionByActionTypeResponse,
  CreateAppointmentActionRequest,
  CreateAppointmentActionResponse,
  GetAppointmentActionsByAppointmentIdV2Request,
  GetAppointmentActionsByAppointmentIdV2Response,
  GetAppointmentActionsByHorseIdRequest,
  GetAppointmentActionsByHorseIdResponse,
  GetAppointmentActionsByUserIdRequest,
  GetAppointmentActionsByUserIdResponse,
  GetAppointmentActionsByUserIdV2Request,
  GetAppointmentActionsByUserIdV2Response,
  GetAppointmentActionsResponse,
  GetAppointmentActionsV3Response
} from '../model/AppointmentAction';
import {GetAppointmentsByHorseIdResponse} from "../model/Appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentActionServiceWrapperService {

  constructor(
    private appointmentActionService: AppointmentActionService
  ) { }

  async createAppointmentAction(
    appointmentId: number,
    description: string,
    smsMessage: string
  ):
    Promise<AppointmentAction>
  {
    const createAppointmentActionRequest: CreateAppointmentActionRequest = {
      appointmentId,
      description,
      smsMessage
    };
    const createAppointmentActionResponse: CreateAppointmentActionResponse =
      await this.appointmentActionService.createAppointmentAction(createAppointmentActionRequest);
    const appointmentAction: AppointmentAction = createAppointmentActionResponse.appointmentAction;
    return appointmentAction;
  }

  async getAppointmentActions():
    Promise<AppointmentAction[]>
  {
    const getAppointmentActionsResponse: GetAppointmentActionsResponse =
      await this.appointmentActionService.getAppointmentActions();
    const appointmentActionsList: AppointmentAction[] =
      getAppointmentActionsResponse.appointmentActionsList;
    return appointmentActionsList;
  }

  async getAppointmentActionsByAppointmentId(appointmentId: number):
    Promise<AppointmentAction[]>
  {
    const getAppointmentActionsByAppointmentIdRequest = {
      appointmentId
    };
    const getAppointmentActionsByAppointmentIdResponse =
      await this.appointmentActionService.getAppointmentActionsByAppointmentId(
        getAppointmentActionsByAppointmentIdRequest
      );
    const appointmentActionsList: AppointmentAction[] =
      getAppointmentActionsByAppointmentIdResponse.appointmentActionsList;
    return appointmentActionsList;
  }

  async createAppointmentActionByActionType(
    appointmentId: number,
    appointmentActionTypeId: number
  ): Promise<AppointmentAction> {
    const createAppointmentActionByActionTypeRequest: CreateAppointmentActionByActionTypeRequest = {
      appointmentId,
      appointmentActionTypeId: '' + appointmentActionTypeId
    };
    const createAppointmentActionByActionTypeResponse: CreateAppointmentActionByActionTypeResponse =
      await this.appointmentActionService.createAppointmentActionByActionType(createAppointmentActionByActionTypeRequest);
    const appointmentAction: AppointmentAction = createAppointmentActionByActionTypeResponse.appointmentAction;
    return appointmentAction;
  }

  async getAppointmentActionsV3():
    Promise<AppointmentActionV3[]>
  {
    const getAppointmentActionsV3Response: GetAppointmentActionsV3Response =
      await this.appointmentActionService.getAppointmentActionsV3();
    const appointmentsActionsList: AppointmentActionV3[] = getAppointmentActionsV3Response.appointmentActionsList;
    return appointmentsActionsList;
  }

  async getAppointmentActionsByAppointmentIdV2(appointmentId: number):
    Promise<AppointmentActionV3[]>
  {
    const getAppointmentActionsByAppointmentIdV2Request: GetAppointmentActionsByAppointmentIdV2Request = {
      appointmentId
    };
    const getAppointmentActionsByAppointmentIdV2Response: GetAppointmentActionsByAppointmentIdV2Response =
      await this.appointmentActionService.getAppointmentActionsByAppointmentIdV2(getAppointmentActionsByAppointmentIdV2Request);
    const appointmentActionsList: AppointmentActionV3[] = getAppointmentActionsByAppointmentIdV2Response.appointmentActionsList;
    return appointmentActionsList;
  }

  async getAppointmentActionsByUserId(
    userId: number
  ): Promise<AppointmentActionV3[]>
  {
    const getAppointmentActionsByUserIdRequest: GetAppointmentActionsByUserIdRequest = {
      userId
    };
    const getAppointmentActionsByUserIdResponse: GetAppointmentActionsByUserIdResponse =
      await this.appointmentActionService.getAppointmentActionsByUserId(getAppointmentActionsByUserIdRequest);
    const appointmentActionsList: AppointmentActionV3[] = getAppointmentActionsByUserIdResponse.appointmentActionsList;
    return appointmentActionsList;
  }

  async getAppointmentActionsByUserIdV2(
    userId: number
  ): Promise<AppointmentActionV3[]>
  {
    const getAppointmentActionsByUserIdV2Request: GetAppointmentActionsByUserIdV2Request = {
      userId: '' + userId
    };
    const getAppointmentActionsByUserIdV2Response: GetAppointmentActionsByUserIdV2Response =
      await this.appointmentActionService.getAppointmentActionsByUserIdV2(getAppointmentActionsByUserIdV2Request);
    const appointmentActionsList: AppointmentActionV3[] = getAppointmentActionsByUserIdV2Response.appointmentActionsList;
    return appointmentActionsList;
  }

  async getAppointmentActionsByHorseId(horseId: number):
    Promise<AppointmentActionV3[]>
  {
    const getAppointmentActionsByHorseIdRequest: GetAppointmentActionsByHorseIdRequest = {
      horseId
    };
    const getAppointmentActionsByHorseIdResponse: GetAppointmentActionsByHorseIdResponse =
      await this.appointmentActionService.getAppointmentActionsByHorseId(getAppointmentActionsByHorseIdRequest);
    const appointmentActionsList: AppointmentActionV3[] = getAppointmentActionsByHorseIdResponse.appointmentActionsList;
    return appointmentActionsList;
  }
}
