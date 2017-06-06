import * as APIUtil from '../util/user_api_util';

export const RECEIVE_REPRESENTATIVES = 'RECEIVE_REPRESENTATIVES';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveRepresentatives= representatives => ({
  type: RECEIVE_REPRESENTATIVES,
  representatives
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createAddress = (address) => dispatch => (
  APIUtil.createAddress(address).then(representatives =>
    dispatch(receiveRepresentatives(representatives)
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateAddress = (address) => dispatch => (
  APIUtil.updateAddress(address).then(representatives =>
    dispatch(receiveRepresentatives(representatives)
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
