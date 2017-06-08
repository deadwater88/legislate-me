import React from 'react';
import { Text, ListView, Image } from 'react-native';
class BillIndex extends React.Component{
  constructor(props){
    super(props);
    //this.props.bills will be an array
    //of pojos
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.bills)
    };
    this.bookmarkBill = this.bookmarkBill.bind(this);
    //average of 200wpm
    //get the count of the bill after scraping it
    // and display bill read time
  }


  render(){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={ bill => <BillIndexItem
          bill={bill}
          bookmarkBill={this.props.bookmarkBill} />}
       />
   );
  }
}

export default BillIndex;
