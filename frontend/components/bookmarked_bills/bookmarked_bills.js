import BillIndex from '../bill_index/bill_index_container';
import React from 'react';
import { Text, ListView, Image } from 'react-native';
class BookmarkedBills extends React.Component{
  constructor(props){
    super(props);
    this.renderBookmarks = true;
  }

  componentDidMount(){
  }

  render(){
    return(
      <BillIndex
        navigation={this.props.navigation}
        renderBookmarks={true}/>
    );
  }
}


export default BookmarkedBills;
