import { connect } from 'react-redux';
import CustomizeInterestList from './CustomizeInterestList.js';
import {receiveSubject} from '../../actions/subject_actions';


const mapDispatchToProps = dispatch => (
  {
    receiveSubject: (subject) => dispatch(receiveSubject(subject))
  }
);


export default connect(null,mapDispatchToProps)(CustomizeInterestList);
