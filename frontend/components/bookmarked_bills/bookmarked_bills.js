import BillIndex from '../bill_index/bill_index_container';
import React from 'react';
import { Text, ListView, Image } from 'react-native';

class BookmarkedBills extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBookmarks();
  }

  render(){
    return(
      <BillIndex/>
    )
  }
}


export default BookmarkedBills;
