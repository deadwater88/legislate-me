import React from 'react';
import { Text, ListView, Image, View, StyleSheet } from 'react-native';
import BillIndexItem from './bill_index_item';

class BillIndex extends React.Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    if (this.props.renderBookmarks){
      this.state = {
        dataSource: ds.cloneWithRows(this.zipped(this.props.bills))
      };
    }
    else{
      this.state = {
        dataSource: ds.cloneWithRows(this.zipped(this.props.bookmarks))
      };
    }

    this.zipped = this.zipped.bind(this);
    this.navigateToBill = this.navigateToBill.bind(this);
  }

  navigateToBill(e){
  }

  // Once component has mounted, fetch bills
  componentWillMount(){
    this.props.renderBookmarks ? this.props.fetchBookmarks()  : this.props.fetchBills();
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
    const ds = this.state.dataSource;

    const bills = (this.props.renderBookmarks ? this.zipped(this.props.bookmarks) : this.zipped(this.props.bills));
    const dataSource = ds.cloneWithRows(bills);

    const SUBJECT_IMAGES = this.props.SUBJECT_IMAGES;
    return (
      <ListView
        dataSource={dataSource}
        renderRow={(rowData) =>
          <BillIndexItem bill={rowData} imgUrl={SUBJECT_IMAGES[rowData[1].subject]}/>}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
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
