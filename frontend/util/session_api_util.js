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
  }).then(res => console.log(res));
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
