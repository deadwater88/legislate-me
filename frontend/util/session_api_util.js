import axios  from 'axios';
import Cookie from 'react-native-cookie';


 export const login = user => (
  axios.post({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signup = user =>
  {
    Cookie.get('http://10.0.2.2:8000','csrftoken').then((cookie) => {
      debugger;
      console.log(cookie)
      return axios({
        method: 'POST',
        url: 'http://10.0.2.2:8000/api/users',
        data: user,
        headers: {'X-CSRFToken': cookie}
      })})
    };

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
