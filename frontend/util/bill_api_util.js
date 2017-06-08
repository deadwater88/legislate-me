import axios from 'axios';
import { HOST_URL } from './host_util';

export const fetchBillInfo = billId => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills/${billId}`
  });
};

export const fetchBillsBySubjects = () => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills/subjects`
  });
};

export const fetchBookMarkedBills = () => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills/bookmarked`
  });
};
