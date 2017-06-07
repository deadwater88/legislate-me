import axios from "axios";
export const deleteUser = user => (
  axios({
    method: 'DELETE',
    url: '/api/user',
    data: user
  })
);

export const createAddress = address => (
  axios({
    method: 'POST',
    url: '/api/user/representatives',
    data: address
  })
);

export const updateAddress = address => (
  axios({
    method: 'PATCH',
    url: '/api/user/representatives',
    data: address
  })
);
