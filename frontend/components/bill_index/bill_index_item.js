import React from 'react';
import { Text, ListView, Image, Button, View, TouchableHighlight, StyleSheet } from 'react-native';
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
    const billId = this.props.bill[0];
    //OS ID is [0], bill object is [1]
    console.log("navigatng to bill");
    this.props.navigation.navigate('BillView', {billId});
  }

  render(){
    const bill = this.props.bill[1];
    const pic_url = this.props.imgUrl;
    let bookmarkIcon;

    if (this.props.bookmarks[this.props.bill[0]]){
      bookmarkIcon = <Icon
                  name="bookmark"
                  size={20}
                  onPress={this.toggleBookmark}
                  />;
      }else{
        bookmarkIcon = <Icon
                    name="bookmark-o"
                    size={20}
                    onPress={this.toggleBookmark}
                    />;
                  // debugger; this is being hit!
      }
    return (
      <TouchableHighlight onPress={this.navigateToBill}>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.subject}>{bill.subject}</Text>
            <Text style={styles.title}>{bill.title}</Text>
            <Text>By: {bill.leg_name}</Text>
          </View>

          <View style={styles.right}>
            <Image style={styles.image} source={pic_url}/>
            {bookmarkIcon}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 18,
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'space-around',
    flexDirection: 'row',
  },
  image: {
    height:70,
    width: 70,
    marginBottom: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  subject: {
    fontSize: 18,
    marginBottom: 5
  },
  left: {
    flex: 4
  },
  right: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1
  }
});

export default BillIndexItem;
