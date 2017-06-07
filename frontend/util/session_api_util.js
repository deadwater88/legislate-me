import axios  from 'axios';
 export const login = user => (
  axios.post({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signup = user => (
  axios({
    method: 'POST',
    url: '/api/user',
    data: user
  })
);

export const logout = () => (
  axios({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const oauth = user => {
  axios({
    method: 'POST',
    url: '/api/oauth',
    data: user
  });
};
