import axios from "axios";
import { HOST_URL } from './host_util';

export const deleteUser = user => {
  return axios({
    method: 'DELETE',
    url: '/api/user',
    data: user
  });
};

export const createAddress = address => {
  return axios({
    method: 'POST',
    url: '/api/user/representatives',
    data: address
  });
};

export const updateAddress = address => {
  return axios({
    method: 'PATCH',
    url: '/api/user/representatives',
    data: address
  });
};
