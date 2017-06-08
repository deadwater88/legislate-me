import React from 'react';
import { Text, ListView, Image } from 'react-native';
class BillIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.bookmarkBill = this.bookmarkBill.bind(this);
  }

  bookmarkBill(){
    this.bookmarkBill(this.props.bill);
  }

  render(){
    return (
        <View>
          <Text>bill title</Text>
          <Image>Bill Image</Image>
          <Text>Bill Legislator</Text>
          <Text>Bill Legislator</Text>
          <Text>Bill Legislator</Text>
          <Text onPress={this.bookmarkBill}>Bookmark icon</Text>
        </View>
    );
  }
}

export default BillIndex;
