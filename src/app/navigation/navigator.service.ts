import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AppointmentService} from '../services/appointments.service';
import {AppointmentActionService} from '../services/appointment-action.service';
import {AuthService} from '../services/auth.service';
import {ChargeService} from '../services/charge.service';
import {HorseService} from '../services/horses.service';
import {StallService} from '../services/stalls.service';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(
    private router: Router,
    private appointmentService: AppointmentService,
    private appointmentActionService: AppointmentActionService,
    private authService: AuthService,
    private chargeService: ChargeService,
    private horseService: HorseService,
    private stallService: StallService,
    private userService: UserService,
  ) {}


}
