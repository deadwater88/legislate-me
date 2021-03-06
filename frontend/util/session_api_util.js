import axios  from 'axios';
import { HOST_URL } from './host_util';


export const login = user => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/sessions`,
    data: user
  });
};

export const signup = user => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/users`,
    data: user,
  });
};

export const logout = () => {
  return axios({
    method: 'DELETE',
    url: `${HOST_URL}/api/sessions`
  });
};

export const oauth = user => {

  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/oauth`,
    data: user
  });
};

export const checkLogin = () => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/sessions`
  });
};

export const demoIn = () => {
  return axios({
    method: 'PATCH',
    url: `${HOST_URL}/api/sessions`
  });
};
