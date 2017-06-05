import { connect } from 'react-redux';
import CustomizeInterestList from './CustomizeInterestList';
import { receiveSubjects } from '../actions/subject_actions';

const mapStateToProps = (state) => ({
  subjects: state.subjects
})

const mapDispatchToProps = dispatch => ({
  receiveSubjects: dispatch(receiveSubjects()),
  receiveSubject: subject => dispatch(receiveSubject(subject))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizeInterestList)
