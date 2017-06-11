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
    //conditional here: this.props.bill is bookmarked, unbookmark
    //else, bookmark
    // this.props.bookmarkBill(this.props.bill);

    // this.props.navigateToBill(this.props.bill);

  }

  navigateToBill(e){
    // ReactNativeComponentTree.getInstancefFromNode(e.target)._currentElement;
    // const elem = ReactNativeComponentTree.getInstanceFromNode(e.target);
    debugger
    this.props.navigate('BillView');
  }
  render(){
    const bill = this.props.bill[1];
    const pic_url = this.props.imgUrl;
    return (
      <TouchableHighlight onPress={this.navigateToBill}>

        <View>
          <Text>{bill.subject}</Text>
          <Text>{bill.title}</Text>
          <Image style={{height:50, width: 50}} source={pic_url}/>
        </View>
      </TouchableHighlight>

    );
    //conditional render on bookmark bill depending on whether bill is bookmarked
  }
}

export default BillIndexItem;
