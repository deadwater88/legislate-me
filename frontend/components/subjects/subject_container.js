import { connect } from 'react-redux';

import Subject from './subject';
import { fetchBillsBySubject } from '../../util/bill_api_util';

const mapDispatchToProps = dispatch =>  ({
  fetchBillsBySubject: subject => dispatch(fetchBillsBySubject(subject))
});

export default connect(null,mapDispatchToProps)(Subject);
