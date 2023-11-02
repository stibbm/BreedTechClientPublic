import { Injectable } from '@angular/core';
import {AppointmentService} from '../services/appointments.service';
import {GetHorsesV2Response, HorseV2} from '../model/Horse';
import {
  Appointment,
  AppointmentV2,
  CreateAppointmentContentRequest,
  CreateAppointmentContentResponse,
  CreateAppointmentRequest,
  CreateAppointmentResponse,
  CreateAppointmentV2Request,
  CreateAppointmentV2Response,
  GetActiveAppointmentsByHorseIdRequest,
  GetActiveAppointmentsByHorseIdResponse,
  GetAllAppointmentsResponse,
  GetAppointmentAmountDueRequest,
  GetAppointmentAmountDueResponse, GetAppointmentsByHorseIdRequest, GetAppointmentsByHorseIdResponse,
  GetAppointmentsByUserIdRequest,
  GetAppointmentsByUserIdResponse,
  GetAppointmentsV2Request,
  GetAppointmentsV2Response,
  GetAppointmentV2ByIdRequest,
  GetAppointmentV2ByIdResponse,
  UpdateAppointmentStatusRequest,
  UpdateAppointmentStatusResponse
} from '../model/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceWrapperService {

  constructor(
    private appointmentService: AppointmentService
  ) {}

  async getAppointmentV2ById(id: number): Promise<AppointmentV2>
  {
    const getAppointmentV2ByIdRequest: GetAppointmentV2ByIdRequest = {
      id
    };
    const getAppointmentV2ByIdResponse: GetAppointmentV2ByIdResponse =
      await this.appointmentService.getAppointmentV2ById(getAppointmentV2ByIdRequest);
    const appointmentV2: AppointmentV2 = getAppointmentV2ByIdResponse.appointmentV2;
    return appointmentV2;
  }

  async createAppointment(
    horseId: number,
    breedingContractId: number,
    createdByUserId: number,
    appointmentStatus: string
  ): Promise<Appointment> {
    const createAppointmentRequest: CreateAppointmentRequest = {
      horseId,
      breedingContractId,
      createdByUserId,
      appointmentStatus
    };
    const createAppointmentResponse: CreateAppointmentResponse =
      await this.appointmentService.createAppointment(createAppointmentRequest);
    const appointment: Appointment = createAppointmentResponse.appointment;
    return appointment;
  }

  async createAppointmentContent(
    horseId: number,
    createdByUserId: number
  ): Promise<Appointment>
  {
    const createAppointmentContentRequest: CreateAppointmentContentRequest = {
      horseId,
      createdByUserId
    };
    const createAppointmentContentResponse: CreateAppointmentContentResponse =
      await this.appointmentService.createAppointmentContent(createAppointmentContentRequest);
    const appointment: Appointment = createAppointmentContentResponse.appointment;
    return appointment;
  }

  async createAppointmentV2(
    horseId: number,
    userId: number,
    reason: string,
    notificationsPhoneNumber: any
  ): Promise<Appointment>
  {
    const createAppointmentV2Request: CreateAppointmentV2Request = {
      horseId,
      userId,
      reason,
      notificationsPhoneNumber
    };
    const createAppointmentV2Response: CreateAppointmentV2Response =
      await this.appointmentService.createAppointmentV2(createAppointmentV2Request);
    const appointment: Appointment = createAppointmentV2Response.appointment;
    return appointment;
  }

  async getAllAppointments(): Promise<Appointment[]> {
    const getAllAppointmentsResponse: GetAllAppointmentsResponse = await this.appointmentService.getAllAppointments();
    const appointmentsList: Appointment[] = getAllAppointmentsResponse.appointmentsList;
    return appointmentsList;
  }

  async getActiveAppointmentsByHorseId(
    horseId: number
  ): Promise<Appointment[]>
  {
    const getActiveAppointmentsByHorseIdRequest: GetActiveAppointmentsByHorseIdRequest = {
      horseId
    };
    const getActiveAppointmentsByHorseIdResponse: GetActiveAppointmentsByHorseIdResponse =
      await this.appointmentService.getActiveAppointmentsByHorseId(getActiveAppointmentsByHorseIdRequest);
    const appointmentsList: Appointment[] = getActiveAppointmentsByHorseIdResponse.appointmentsList;
    return appointmentsList;
  }

  async getAppointmentsV2():
    Promise<AppointmentV2[]>
  {
    const getAppointmentsV2Response: GetAppointmentsV2Response =
      await this.appointmentService.getAppointmentsV2();
    const appointmentV2sList: AppointmentV2[] = getAppointmentsV2Response.appointmentsList;
    return appointmentV2sList;
  }

  async updateAppointmentStatus(
    appointmentId: number,
    updatedStatus: string
  ): Promise<Appointment> {
    const updateAppointmentStatusRequest: UpdateAppointmentStatusRequest = {
      appointmentId,
      updatedStatus
    };
    const updateAppointmentStatusResponse: UpdateAppointmentStatusResponse =
      await this.appointmentService.updateAppointmentStatus(updateAppointmentStatusRequest);
    const appointment: Appointment = updateAppointmentStatusResponse.appointment;
    return appointment;
  }

  async getAppointmentAmountDue(
    appointmentId: number
  ): Promise<GetAppointmentAmountDueResponse>
  {
    const getAppointmentAmountDueRequest: GetAppointmentAmountDueRequest = {
      appointmentId
    };
    const getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse =
      await this.appointmentService.getAppointmentAmountDue(getAppointmentAmountDueRequest);
    return getAppointmentAmountDueResponse;
  }

  async getAppointmentsByUserId(
    userId: number
  ): Promise<AppointmentV2[]>
  {
    const getAppointmentsByUserIdRequest: GetAppointmentsByUserIdRequest = {
      userId
    };
    const getAppointmentsByUserIdResponse: GetAppointmentsByUserIdResponse =
      await this.appointmentService.getAppointmentsByUserId(getAppointmentsByUserIdRequest);
    const appointmentsList: AppointmentV2[] = getAppointmentsByUserIdResponse.appointmentsList;
    return appointmentsList;
  }

  async getAppointmentsByHorseId(horseId: number)
    :Promise<AppointmentV2[]>
  {
    const getAppointmentsByHorseIdRequest: GetAppointmentsByHorseIdRequest = {
      horseId
    };
    const getAppointmentsByHorseIdResponse: GetAppointmentsByHorseIdResponse =
      await this.appointmentService.getAppointmentsByHorseId(getAppointmentsByHorseIdRequest);
    const appointmentsList: AppointmentV2[] = getAppointmentsByHorseIdResponse.appointmentsList;
    return appointmentsList;
  }
}
