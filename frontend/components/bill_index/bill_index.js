import React from 'react';
import { Text, ListView, Image } from 'react-native';
class BillIndex extends React.Component{
  constructor(props){
    super(props);
    //this.props.bills will be an array of pojos

    //temporarily overriding
    this.props.bills = [{}, {}, {}];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(this.props.bills)
    // };
    this.navigateToBill = this.navigateToBill.bind(this);
  }

  navigateToBill(){
    //add logic for navigating to a bill
  }

  render(){
    return (<ListView
      onPress={this.navigateToBill}
      dataSource={this.state.dataSource}
      renderRow={ bill => <BillIndexItem
        bill={bill}
        bookmarkBill={this.props.bookmarkBill} />}
        />);
    // return (<Text></Text>);
  }
}

export default BillIndex;
