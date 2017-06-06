import { connect } from 'react-redux';

import User from './user';

const mapStateToProps = state => (
  {
    session: state.session,
    subjects: state.subjects
  }
);


const mapDispatchToProps = dispatch => (
  {

  }
);


export default connect(mapStateToProps,mapDispatchToProps)(User);
