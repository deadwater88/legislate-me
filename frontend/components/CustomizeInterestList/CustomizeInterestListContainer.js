import { connect } from 'react-redux';
import CustomizeInterestList from './CustomizeInterestList.js';
import {receiveSubject, saveSubject } from '../../actions/subject_actions';
import { zipped } from '../../reducers/selectors' ;

const mapStateToProps = state => ({
  subjects: zipped(state.subjects),

});

const mapDispatchToProps = dispatch => (
  {
    receiveSubject: (subject) => dispatch(receiveSubject(subject)),
    saveSubject: (subject) => dispatch(saveSubject(subject))
  }
);


export default connect(mapStateToProps,mapDispatchToProps)(CustomizeInterestList);
