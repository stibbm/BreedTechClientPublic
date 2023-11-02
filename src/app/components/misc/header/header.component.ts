import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  headerColumns = [
    'Horses',
    'Stalls',
    'Appointment',
  ];

  constructor() {}

  ngOnInit() {}

  async goToPage(headerColumn: string) {

  }
}
