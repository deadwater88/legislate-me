import axios from 'axios';
import { HOST_URL } from './host_util';

export const bookmarkBill = bill => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/bills/bookmarked`,
    data: bill
  });
};
