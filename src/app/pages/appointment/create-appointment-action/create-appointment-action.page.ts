import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {AppointmentActionService} from '../../../services/appointment-action.service';
import {
  CreateAppointmentActionByActionTypeRequest,
  CreateAppointmentActionByActionTypeResponse,
  CreateAppointmentActionRequest, CreateAppointmentActionResponse,
  GetAppointmentActionsByAppointmentIdRequest,
  GetAppointmentActionsByAppointmentIdResponse
} from '../../../model/AppointmentAction';
import {
  AppointmentActionTypeSelectorComponent
} from '../../../components/selectors/appointment-action-type-selector/appointment-action-type-selector.component';
import {AppointmentActionTypeDisplayable, CreateAppointmentActionTypeRequest} from '../../../model/AppointmentActionType';
import {
  AppointmentV2,
  AppointmentV2Displayable,
  GetAppointmentV2ByIdRequest,
  GetAppointmentV2ByIdResponse
} from '../../../model/Appointment';
import {AppointmentService} from '../../../services/appointments.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-create-appointment-action',
  templateUrl: './create-appointment-action.page.html',
  styleUrls: ['./create-appointment-action.page.scss'],
})
export class CreateAppointmentActionPage implements OnInit {

  // appointment id should be taken as input
  // since it is a specific appointment which is being
  // selected to navigate to here

  @ViewChild(AppointmentActionTypeSelectorComponent, {static: false})
    appointmentActionTypeSelectorComponent: AppointmentActionTypeSelectorComponent;

  appointmentId: number;
  appointmentV2Displayable: string;
  appointmentV2DisplayableObject: AppointmentV2Displayable;
  description: string = '';
  smsContent: string = '';

  isCreateButtonPressed = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appointmentActionService: AppointmentActionService,
    private appointmentService: AppointmentService,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    this.isCreateButtonPressed = false;
    console.log('CreateAppointmentActionPage ngOnInit');
    await this.authService.verifyUserLoggedIn();
    await this.activatedRoute.queryParams
      .subscribe(params => {
        console.log('PARAMS');
        console.log(params);
        this.appointmentId = params.appointmentId;
        this.appointmentV2Displayable = JSON.parse(params.appointmentJSON);
        this.appointmentV2DisplayableObject = JSON.parse(params.appointmentJSON);
      });
    console.log(this.appointmentV2Displayable);
    const getAppointmentActionsByAppointmentIdRequest: GetAppointmentActionsByAppointmentIdRequest = {
      appointmentId: this.appointmentId,
    };
    const getAppointmentActionsByAppointmentIdResponse: GetAppointmentActionsByAppointmentIdResponse =
      await this.appointmentActionService.getAppointmentActionsByAppointmentId(getAppointmentActionsByAppointmentIdRequest);
    console.log(getAppointmentActionsByAppointmentIdResponse);
  }

  async ionViewWillEnter() {
    await this.ngOnInit();
  }

  async onCreateAppointmentActionTypeButtonPressed() {
    console.log('onCreateAppointmentActionTypeButtonPressed');
    await this.router.navigate(['create-appointment-action-type']);
  }

  async onCreateNewActionTypeButtonPressed() {
    console.log('onCreateNewActionTypeButtonPressed');
    await this.router.navigate(['create-appointment-action-type']);
  }

  async onCreateAppointmentActionButtonPressed() {
    if (this.isCreateButtonPressed === false) {
      this.isCreateButtonPressed = true;
      console.log('onCreateAppointmentButtonPressed');
      console.log('description: ' + this.description);
      console.log('smsContent: ' + this.smsContent);

      const appointmentActionTypeDisplayable: AppointmentActionTypeDisplayable =
        await this.appointmentActionTypeSelectorComponent.getAppointmentActionTypeDisplayable();
      const appointmentActionTypeId: string = appointmentActionTypeDisplayable.id;

      const createAppointmentActionByActionTypeRequest: CreateAppointmentActionByActionTypeRequest = {
        'appointmentId': this.appointmentId,
        'appointmentActionTypeId': appointmentActionTypeId
      };

      const createAppointmentActionByActionTypeResponse: CreateAppointmentActionByActionTypeResponse =
        await this.appointmentActionService.createAppointmentActionByActionType(createAppointmentActionByActionTypeRequest);

      console.log('createAppointmentActionByActionTypeResponse: ');
      console.log(createAppointmentActionByActionTypeResponse);
      const appointmentIdString: string = '' + this.appointmentV2DisplayableObject.id;
      const getAppointmentV2ByIdRequest: GetAppointmentV2ByIdRequest = {
        id: this.appointmentV2DisplayableObject.id
      };
      const getAppointmentV2ByIdResponse: GetAppointmentV2ByIdResponse =
        await this.appointmentService.getAppointmentV2ById(getAppointmentV2ByIdRequest);
      const appointmentV2: AppointmentV2 = getAppointmentV2ByIdResponse.appointmentV2;
      const navigationExtras: NavigationExtras = {
        queryParams: {
          appointmentId: appointmentIdString,
          appointmentJSON: JSON.stringify(this.appointmentV2Displayable),
          appointmentV2JSON: JSON.stringify(appointmentV2)
        }
      };
      await this.router.navigate(['appointment-details'], navigationExtras);
    }
  }
}
