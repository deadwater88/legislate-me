import { connect } from 'react-redux';
import BillIndex from './BillIndex';

const mapStateToProps = (state) => ({
  bills: state.bills
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(BillIndex);
