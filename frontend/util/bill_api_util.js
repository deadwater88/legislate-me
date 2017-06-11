import axios from 'axios';
import { HOST_URL } from './host_util';

export const fetchBillInfo = billId => {
  debugger
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills/${billId}`
  });
};

export const fetchBillsBySubjects = () => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bills`
  });
};

export const fetchBillsBySubject = subject => {
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
