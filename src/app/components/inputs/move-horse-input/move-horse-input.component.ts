import { Component, OnInit } from '@angular/core';
import { Horse } from 'src/app/model/Horse';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-move-horse-input',
  templateUrl: './move-horse-input.component.html',
  styleUrls: ['./move-horse-input.component.scss'],
})
export class MoveHorseInputComponent implements OnInit {

  user: User;
  horse: Horse;
  

  constructor() { }

  ngOnInit() {}

}
