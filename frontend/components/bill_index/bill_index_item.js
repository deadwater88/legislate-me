import React from 'react';
import { Text, ListView, Image, Button } from 'react-native';
class BillIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }

  toggleBookmark(){
    //conditional here: this.props.bill is bookmarked, unbookmark
    //else, bookmark
    // this.props.bookmarkBill(this.props.bill);

    this.props.navigateToBill(this.props.bill);
  }

  render(){
    return (
        <View>
          <Text>bill title</Text>
          <Image>Bill Image</Image>
          <Text>Bill Legislator</Text>
          <Text>Bill Legislator</Text>
          <Text>Bill Legislator</Text>
          <Button onPress={this.toggleBookmark}>Bookmark icon</Button>
        </View>
    );
    //conditional render on bookmark bill depending on whether bill is bookmarked
  }
}

export default BillIndexItem;
