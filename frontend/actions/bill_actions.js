import * as APIUtil from '../util/bill_api_util';
export const RECEIVE_BILLS = 'RECEIVE_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';

export const receiveBills = bills => ({
  type: RECEIVE_BILLS,
  bills
});

export const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
});

export const fetchBillsBySubject = subject  => dispatch => (
  APIUtil.fetchBillsBySubject(subject).then(bills =>
    dispatch(receiveBills(bills.data))
));

export const fetchBills = () => dispatch => (
  APIUtil.fetchBillsBySubjects().then(bills => {
    dispatch(receiveBills(bills.data));
  }
));

export const fetchBillInfo = (billId) => dispatch => (
  APIUtil.fetchBillInfo(billId).then(bill => {
    dispatch(receiveBill(bill.data))
  }
));

export const fetchBookmarks = () => dispatch => (
  APIUtil.fetchBookMarkedBills().then(bills => {
    console.log("fetched bookmarks");
    return (
      dispatch(receiveBills(bills.data))
    )
  }
));
