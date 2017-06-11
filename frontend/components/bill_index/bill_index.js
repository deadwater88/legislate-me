import React from 'react';
import { Text, ListView, Image, View, TouchableHighlight, StyleSheet } from 'react-native';
import BillIndexItem from './bill_index_item';
import ReactNativeComponentTree from 'react-native/Libraries/Renderer/src/renderers/native/ReactNativeComponentTree';

class BillIndex extends React.Component{
  constructor(props){
    super(props);
    ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      ds,
      dataSource: ds.cloneWithRows(this.zipped(this.props.bills))
    };
    // debugger
    this.zipped = this.zipped.bind(this);
    this.navigateToBill = this.navigateToBill.bind(this);
  }

  navigateToBill(e){
    //add logic for navigating to a bill
    // console.log("bill view");
    const elem = ReactNativeComponentTree.getInstanceFromNode(e.target);
    const elem2 = ReactNativeComponentTree.getInstanceFromNode(e.currentTarget);
    const elem3 = ReactNativeComponentTree.getInstanceFromNode(e.nativeEvent.target);
    debugger
    // ReactNativeComponentTree.getInstancefFromNode(e.target)._currentElement;

  }

  // Once component has mounted, fetch bills
  componentWillMount(){
    // console.log("fetching bills");
    this.props.fetchBills()
    // debugger
  }

  zipped(bills){
    let zippedArray = [];
    Object.keys(bills).forEach((key) => {
      const value = bills[key];
      zippedArray.push([key, value]);
    });

    return zippedArray;
  }

  render(){
    // ds = this.state.dataSource;
    // debugger
    const {navigate } = this.props.navigation;
    const bills = this.zipped(this.props.bills);
    const dataSource = this.state.ds.cloneWithRows(bills);
    const SUBJECT_IMAGES = this.props.SUBJECT_IMAGES
    return (
      <TouchableHighlight onPress={this.navigateToBill}>

      <ListView
        dataSource={dataSource}
        renderRow={(rowData) =>
          <BillIndexItem
            navigate={navigate}
            bill={rowData}
            imgUrl={SUBJECT_IMAGES[rowData[1].subject]}
            />}
      />
  </TouchableHighlight>

    );
  }
}
//
// <ListView
//   dataSource={this.state.dataSource}
//   renderRow={ bill => <BillIndexItem
//     bill={bill}
//     navigateToBill={this.navigateToBill}
//     bookmarkBill={this.props.bookmarkBill} />}
//     />

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

export default BillIndex;
