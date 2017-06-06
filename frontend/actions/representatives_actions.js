import * as APIUtil from '../util/user_api_util';

export const RECEIVE_REPRESENTATIVES = 'RECEIVE_REPRESENTATIVES';

export const receiveRepresentatives= representatives => ({
  type: RECEIVE_REPRESENTATIVES,
  representatives
});

export const createAddress = (address) => dispatch => (
  APIUtil.createAddress(address).then(representatives =>
    dispatch(receiveRepresentatives(representatives)
  ))
);

export const updateAddress = (address) => dispatch => (
  APIUtil.updateAddress(address).then(representatives =>
    dispatch(receiveRepresentatives(representatives)
  ))
);
