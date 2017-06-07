import { connect } from 'react-redux';
import CustomizeInterestList from './CustomizeInterestList.js';
import {receiveSubject} from '../../actions/subject_actions';
import { zipped } from '../../reducers/selectors' ;

const mapStateToProps = state => ({
  subjects: zipped(state.subjects),

});

const mapDispatchToProps = dispatch => (
  {
    receiveSubject: (subject) => dispatch(receiveSubject(subject))
  }
);


export default connect(null,mapDispatchToProps)(CustomizeInterestList);
