import React from 'react';
import { Text, ListView, Image, Button, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    const bill = this.props.bill[1];
    const pic_url = this.props.imgUrl;
    // debugger
    return (
        <View>
          <Text>{bill.subject}</Text>
          <Text>{bill.title}</Text>
          <Image source={{pic_url}}/>
        </View>
    );
    //conditional render on bookmark bill depending on whether bill is bookmarked
  }
}

export default BillIndexItem;
