import * as APIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOG_OUT = 'LOGOUT';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
export const killState = () => ({
  type: LOG_OUT
});



export const signup = user => dispatch => (

  APIUtil.signup(user).then(response => (
    dispatch(receiveCurrentUser(response.data))
  ), err => (
    dispatch(receiveErrors(err.response.data))
  ))
);

export const login = user => dispatch => (

  APIUtil.login(user).then(response => (
    dispatch(receiveCurrentUser(response.data))
  ), err => {
    return dispatch(receiveErrors(err.response.data));
  })
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(killState())
  ))
);

export const checkLogin = () => dispatch => (
  APIUtil.checkLogin().then(response=> (
    dispatch(receiveCurrentUser(response.data))
  ))
);




export const deleteUser = user => dispatch => (
  UserAPIUtil.deleteUser(user).then(nullUser => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const authUser = user => dispatch => {
  return APIUtil.oauth(user).then(response => (
    dispatch(receiveCurrentUser(response.data))
  ));
};
