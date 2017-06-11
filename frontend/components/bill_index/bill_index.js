import React from 'react';
import { Text, ListView, Image } from 'react-native';
class BillIndex extends React.Component{
  constructor(props){
    super(props);
    //this.props.bills will be an array of pojos

    console.log("in bill index");
    //temporarily overriding
    this.props.bills = [{}, {}, {}];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.bills)
    };
    this.navigateToBill = this.navigateToBill.bind(this);
  }

  navigateToBill(e){
    //add logic for navigating to a bill
    console.log("bill view");
  }

  // Once component has mounted, fetch bills
  componentDidMount(){
    console.log("fetching bills");
    this.props.fetchBills();
  }

  render(){
    return (<ListView
      dataSource={this.state.dataSource}
      renderRow={ bill => <BillIndexItem
        bill={bill}
        bookmarkBill={this.props.bookmarkBill} />}
        />);
  }
}

export default BillIndex;
