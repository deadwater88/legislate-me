import { connect } from 'react-redux';

import Subject from './subject';
import { fetchSubject } from '../util/subject_api_util';

const mapDispatchToProps = dispatch =>  ({
  fetchSubject: subject => dispatch(fetchSubject(subject))
});


export default connect(null,mapDispatchToProps)(Subject);
