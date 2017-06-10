import * as APIUtil from '../util/bill_api_util';
export const RECEIVE_BILLS = 'RECEIVE_BILLS';

export const receiveBills = bills => ({
  type: RECEIVE_BILLS,
  bills
});

export const fetchBillsBySubject = subject  => dispatch => (
  APIUtil.fetchBillsBySubject(subject).then(bills =>
    dispatch(receiveBills(bills.data))
));

export const fetchBills = () => dispatch => (
  APIUtil.fetchBillsBySubjects().then(bills =>
    dispatch(receiveBills(bills.data))
));

export const fetchBookmarks = () => dispatch => (
  APIUtil.fetchBookMarkedBills().then(bills =>
    dispatch(receiveBills(bills.data))
));
