import { connect } from 'react-redux';
import CustomizeInterestList from './CustomizeInterestList';
import { fetchSubjects } from '../actions/subject_actions';

const mapStateToProps = (state) => ({
  subjects: state.subjects
})

const mapDispatchToProps = dispatch => ({
  fetchSubjects: () => dispatch(fetchSubjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizeInterestList)
