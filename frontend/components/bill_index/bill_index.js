import React from 'react';
import { Text, ListView, Image, View, TouchableHighlight, StyleSheet } from 'react-native';
import BillIndexItem from './bill_index_item';
import ReactNativeComponentTree from 'react-native/Libraries/Renderer/src/renderers/native/ReactNativeComponentTree';
import Icon from 'react-native-vector-icons/FontAwesome';

class BillIndex extends React.Component{
  constructor(props){
    console.log("creating bill index");
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    if (this.props.renderBookmarks){
      this.state = {
        ds,
        dataSource: ds.cloneWithRows(this.zipped(this.props.bookmarks))
      };
    }
    else{
      this.state = {
        ds,
        dataSource: ds.cloneWithRows(this.zipped(this.props.bills))
      };
    }
    this.zipped = this.zipped.bind(this);
  }

  componentWillMount() {
    if (this.props.navigation && this.props.navigation.state.params){
      let subjectName = this.props.navigation.state.params.subjectName;
      this.props.fetchBillsBySubject(subjectName);
    }else if (this.props.renderBookmarks) {
      this.props.fetchBookmarks();
    } else{
      this.props.fetchBills();
    }
  }

  componentDidMount(){
    // debugger;
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
    // debugger;
    console.log('bill index render function hit');
    const ds = this.state.dataSource;
    const {navigate} = this.props.navigation;

    const bills = (this.props.renderBookmarks ? this.zipped(this.props.bookmarks) : this.zipped(this.props.bills));
    const dataSource = this.state.ds.cloneWithRows(bills);
    const SUBJECT_IMAGES = this.props.SUBJECT_IMAGES;
    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderRow={(rowData) =>
          <BillIndexItem
            bill={rowData}
            navigate={navigate}
            imgUrl={SUBJECT_IMAGES[rowData[1].subject]}
            bookmarkBill={this.props.bookmarkBill}
            deleteBookmark={this.props.deleteBookmark}
            bookmarks={this.props.bookmarks}
            navigation={this.props.navigation}
            isBookmark={this.props.renderBookmarks}
            />}

      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  separator: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    alignSelf: 'center',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

export default BillIndex;
