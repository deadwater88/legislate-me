import BillIndex from '../bill_index/bill_index_container';
import React from 'react';
import { Text, ListView, Image, View, ToastAndroid } from 'react-native';
class BookmarkedBills extends React.Component{
  constructor(props){
    super(props);
    this.renderBookmarks = true;
  }

  componentDidMount(){
  }

  renderNoBookMarksMessage(){
    message = "You currently don't have any bills bookmarked! Bookmark bills on the home page to follow them."
    if (Object.keys(this.props.bookmarks).length == 0){
      ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.CENTER)
    }
  }

  render(){
    return(
      <View>
        <BillIndex
          navigation={this.props.navigation}
          renderBookmarks={true}/>
        {this.renderNoBookMarksMessage()}
      </View>
    );
  }
}


export default BookmarkedBills;
