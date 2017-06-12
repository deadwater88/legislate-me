import axios from 'axios';
import { HOST_URL } from './host_util';

export const fetchBillInfo = billId => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills/${billId}`
  });
};

export const fetchBills = () => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills`
  });
};

export const fetchBills = subject => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills/subjects/${subject}`
  });
};

export const fetchBookMarkedBills = () => {
  //this is being hit.
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills/bookmarked`
  });
};

export const bookmarkBill = bill => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/bills/bookmarked`,
    data: bill
  });
};

export const deleteBookmark = bill => {
  return axios({
    method: 'DELETE',
    url: `${HOST_URL}/api/bills/bookmarked`,
    data: bill
  });
};
