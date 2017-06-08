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
  }

  render(){
    // <ListView
    //   dataSource={this.state.dataSource}
    //   renderRow={ bill => <BillIndexItem
    //     bill={bill}
    //     bookmarkBill={this.props.bookmarkBill} />}
    //     />
    return (<Text></Text>);
  }
}

export default BillIndex;
