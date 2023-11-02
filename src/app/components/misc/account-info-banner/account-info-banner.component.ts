import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/User';

@Component({
  selector: 'app-account-info-banner',
  templateUrl: './account-info-banner.component.html',
  styleUrls: ['./account-info-banner.component.scss'],
})
export class AccountInfoBannerComponent implements OnInit {

  //@Input() userLoggedInEmail: string;
  //@Input() userLoggedIn: User;
  //@Input() user: User;
  @Input() userEmail: string;

  constructor() {}

  ngOnInit() {}

}
