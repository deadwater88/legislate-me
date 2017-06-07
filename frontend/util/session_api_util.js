import axios from 'axios';

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signup = user => (
  axios({
    method: 'POST',
    url: 'http://10.0.2.2:8000/api/users',
    data: user
  }).then(
    res => console.log(res),
    err => console.log(err)
  )
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
