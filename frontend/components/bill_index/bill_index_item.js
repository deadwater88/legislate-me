import React from 'react';
import { Text, ListView, Image, Button, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReactNativeComponentTree from 'react-native/Libraries/Renderer/src/renderers/native/ReactNativeComponentTree';

class BillIndexItem extends React.Component{
  constructor(props){
    super(props);
    console.log("bill index item");
    this.toggleBookmark = this.toggleBookmark.bind(this);
    this.navigateToBill = this.navigateToBill.bind(this);
  }

  toggleBookmark(){
    // debugger;
    if (this.props.bookmarks[this.props.bill[0]]){ // if it's bookmarked
      this.props.deleteBookmark(this.props.bill[1]);
    } else {
      this.props.bookmarkBill(this.props.bill[1]);
    }
  }

  navigateToBill(e){
    // ReactNativeComponentTree.getInstancefFromNode(e.target)._currentElement;
    // const elem = ReactNativeComponentTree.getInstanceFromNode(e.target);
    // debugger
    const billId = this.props.bill[0];
    //OS ID is [0], bill object is [1]
    console.log("navigatng to bill");
    this.props.navigation.navigate('BillView', {billId});
  }

  render(){
    const bill = this.props.bill[1];
    const pic_url = this.props.imgUrl;
    console.log("rendering bill index item");
    return (
      <TouchableHighlight onPress={this.navigateToBill}>
        <View>
          <Text>{bill.subject}</Text>
          <Text>{bill.title}</Text>
          <Image style={{height:50, width: 50}} source={pic_url}/>
          <Button title="Bookmark this bill" onPress={this.toggleBookmark}>

          </Button>
        </View>
      </TouchableHighlight>
    );
  }
}

export default BillIndexItem;
