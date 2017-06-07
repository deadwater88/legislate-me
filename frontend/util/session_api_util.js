import axios  from 'axios';
import Cookie from 'react-native-cookie';


export const login = user => {
  return axios.post({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};

export const signup = user => {
  return axios({
    method: 'POST',
    url: 'http://10.0.2.2:8000/api/users',
    data: user,
  });
};

export const logout = () => {
  return axios({
    method: 'DELETE',
    url: '/api/session'
  });
};

export const oauth = user => {
  return axios({
    method: 'POST',
    url: '/api/oauth',
    data: user
  });
};
