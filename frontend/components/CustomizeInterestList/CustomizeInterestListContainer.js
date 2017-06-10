import { connect } from 'react-redux';
import CustomizeInterestList from './CustomizeInterestList.js';
import {fetchSubjects, saveSubjects } from '../../actions/subject_actions';
// import { zipped } from '../../reducers/selectors' ;
// import {fetchSubjects}
const mapStateToProps = state => ({
  subjects: state.subjects
});

const mapDispatchToProps = dispatch => (
  {
    fetchSubjects: (subjects) => dispatch(fetchSubjects(subjects)),
    saveSubjects: (subjects) => dispatch(saveSubjects(subjects))
  }
);


export default connect(mapStateToProps,mapDispatchToProps)(CustomizeInterestList);
