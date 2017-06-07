import axios from "axios";
import { HOST_URL } from './host_util';

export const deleteUser = user => {
  return axios({
    method: 'DELETE',
    url: `${HOST_URL}/api/user`,
    data: user
  });
};

export const createAddress = address => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/user/representatives`,
    data: address
  });
};

export const updateAddress = address => {
  return axios({
    method: 'PATCH',
    url: `${HOST_URL}/api/user/representatives`,
    data: address
  });
};
