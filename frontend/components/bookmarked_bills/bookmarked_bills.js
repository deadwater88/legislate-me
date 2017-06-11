import BillIndex from '../bill_index/bill_index_container';
import React from 'react';
import { Text, ListView, Image } from 'react-native';

class BookmarkedBills extends React.Component{
  constructor(props){
    console.log("in bookmarks");
    super(props);
  }

  componentDidMount(){
    // debugger
    console.log("hit bookmarks");
    // this.props.fetchBookmarks();
  }

  render(){
    return(
      <Text>WHAAAAA</Text>
      // <BillIndex/>
    )
  }
}


export default BookmarkedBills;
