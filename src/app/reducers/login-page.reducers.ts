import { Action, createReducer, on } from '@ngrx/store';
import * as LoginPageActions from '../actions/login-page.actions';

export interface State {
    username: string;
    password: string;
}
export const initialState: State = {
    username: '',
    password: ''
};

const loginReducer = createReducer(
    initialState,
    on(LoginPageActions.login, (state, {username, password}) => ({ ...state, username, password}))
);

export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action);
}
