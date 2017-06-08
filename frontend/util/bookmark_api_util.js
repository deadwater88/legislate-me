import axios from 'axios';
import { HOST_URL } from './host_util';

export const fetchBookmarkedBills = () => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/bookmarked/bills`
  });
};

export const bookmarkBill = bill => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/bookmarked/bills`,
    data: bill
  });
};
