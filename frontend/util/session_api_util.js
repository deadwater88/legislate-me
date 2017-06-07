import axios  from 'axios';
import { HOST_URL } from './host_util';


export const login = user => {
  return axios.post({
    method: 'POST',
    url: `${HOST_URL}/api/session`,
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
    url: `${HOST_URL}/api/session`
  });
};

export const oauth = user => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/oauth`,
    data: user
  });
};
