import axios from 'axios';
import { HOST_URL } from './host_util';

export const fetchBillsBySubject = (subject) => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills/subject`
  });
};

export const fetchBills = () => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills`
  });
};

export const bookmarkBill = bill => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/bills`,
    data: bill
  });
};
