import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateStallInputComponent} from '../../../components/inputs/create-stall-input/create-stall-input.component';
import {CreateStallRequestContents, CreateStallResponseContents, CreateStallSimpleRequest, Stall} from '../../../model/Stall';
import {StallService} from '../../../services/stalls.service';
import {Router} from '@angular/router';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-create-stall',
  templateUrl: './create-stall.page.html',
  styleUrls: ['./create-stall.page.scss'],
})
export class CreateStallPage implements OnInit {

  @ViewChild(CreateStallInputComponent, {static: false}) createStallInputComponent: CreateStallInputComponent;

  stall: Stall;

  constructor(
    private stallService: StallService,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
  }

  async onCreateStallButtonPressed() {
    const createStallSimpleRequest: CreateStallSimpleRequest = {
      stallName: await this.createStallInputComponent.getStallName(),
      capacity: await this.createStallInputComponent.getCapacity(),
      description: await this.createStallInputComponent.getDescription(),
      notes: await this.createStallInputComponent.getNotes()
    };
    const createStallSimpleResponse = await this.stallService.createStallSimple(createStallSimpleRequest);
    this.stall = createStallSimpleResponse.stall;
    this.reset();
    alert('stall created');
    await this.router.navigate(['stalls']);
  }

  getStall() {
    return this.stall;
  }

  reset() {
    this.createStallInputComponent.reset();
    this.stall = null;
  }

}
