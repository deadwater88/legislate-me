export const deleteUser = user => (
  $.ajax({
    method: 'DELETE',
    url: '/api/user',
    data: user
  })
);

export const createAddress = address => (
  $.ajax({
    method: 'POST',
    url: '/api/user/address',
    data: address
  })
);

export const updateAddress = address => (
  $.ajax({
    method: 'PATCH',
    url: '/api/user/address',
    data: address
  })
);
