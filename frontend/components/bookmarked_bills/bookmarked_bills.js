import BillIndex from '../bill_index/bill_index_container';
import React from 'react';
import { Text, ListView, Image } from 'react-native';
class BookmarkedBills extends React.Component{
  constructor(props){
    super(props);
    this.renderBookmarks = true;
  }

  componentDidMount(){
    console.log("hit bookmarks");
  }

  render(){
    return(
      <BillIndex renderBookmarks={true}/>
    );
  }
}


export default BookmarkedBills;
