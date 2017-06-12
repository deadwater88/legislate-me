import axios from "axios";
import { HOST_URL } from './host_util';

export const deleteUser = user => {
  return axios({
    method: 'DELETE',
    url: `${HOST_URL}/api/users`,
    data: user
  });
};

export const createAddress = address => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/users/representatives`,
    data: {address}
  });
};

export const updateAddress = address => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/users/representatives`,
    data: {address}
  });
};

export const finishSetup = () => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/users/setup`
  });
};
