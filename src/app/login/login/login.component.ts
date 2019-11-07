import {Component, OnInit, ViewChild} from '@angular/core';
import {ClrWizard} from '@clr/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  @ViewChild('wizardxl') wizardExtraLarge: ClrWizard;
  xlOpen = false;
  constructor() { }

  ngOnInit() {
  }

  signUp() {
    this.xlOpen = true;
  }
}
