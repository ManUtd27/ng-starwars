import {Component, OnInit, ViewChild} from '@angular/core';
import {ClrWizard} from '@clr/angular';
import {select, Store} from '@ngrx/store';
import {login} from '../../actions/login-page.actions';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  @ViewChild('wizardxl') wizardExtraLarge: ClrWizard;
  xlOpen = false;
  constructor( public fb: FormBuilder, private store: Store<{login: {username: string, password: string}}>) { }

  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const {username, password } = this.loginForm.value;
    this.store.dispatch(login({ username, password }));
    this.loginForm.reset();
  }
  signUp() {
    this.xlOpen = true;
  }
}
