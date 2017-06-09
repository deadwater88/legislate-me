import React from 'react';
import { ListView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';

class RepresentativesView extends React.Component {
  constructor(props){
    super(props);
    this.onEmail = this.onEmail.bind(this);
    this.onCall = this.onCall.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(["john smith", "amelia johnson"]),
    };
  }
  
  onEmail(){
    Communications.phonecall('valid_number', true);
    console.log("You've emailed your representatives!");
  }

  onCall(){
    Communications.email(['emailAddress1', 'emailAddress2'],
    null,null,
    `My Support for ${this.props.bill.title}` ,
    `I think you should support ${this.props.bill.title} `);
    console.log("You've called your representatives!");
  }

  render(){
    const { icons, container } = styles;
    return(
      <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => (
            <View style={container}>
              <Text>{rowData}</Text>
              <View style={icons}>

                <Icon.Button name="phone-square"
                   size={40}
                   color="#009E11"
                   margin={0}
                   padding={0}
                   backgroundColor="white"
                   onPress={this.onCall}
                   style={ {paddingRight: 10}} />

                 <Icon.Button name="envelope"
                    size={40}
                    color="#CF2A28"
                    margin={0}
                    padding={0}
                    backgroundColor="white"
                    onPress={this.onEmail}
                    style={{}} />


               </View>
           </View>                   )}
        />
    );
  }
}
const styles = {
  icons: {
    flexDirection: 'row',
    paddingRight: 5,
    backgroundColor: 'white'

  },
  container: {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            },
};

export default RepresentativesView;
