import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ADDRESS = 'RECEIVE_ADDRESS';

export const receiveAddress = address => ({
  type: RECEIVE_ADDRESS,
  address
});

export const createAddress = (address) => dispatch => (
  APIUtil.createAddress(address).then(newAddress =>
    dispatch(receiveAddress(newAddress)
  ))
);

export const updateAddress = (address) => dispatch => (
  APIUtil.updateAddress(address).then(newAddress =>
    dispatch(receiveAddress(newAddress)
  ))
);
