import React from 'react';
import { ListView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';
import { zipped } from '../../reducers/selectors';

class RepresentativesView extends React.Component {
  //bill view passes rep objects to representative view
  //in below code, assuming I have a this.props.reps objects

  constructor(props){
    super(props);
    this.emailRep = this.emailRep.bind(this);
    this.callRep = this.callRep.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(zipped(this.props.representatives))
    };
  }

  callRep(phoneNum){
    Communications.phonecall(phoneNum, true);
  }

  buildEmail(fName, lName, supportive){
    debugger
    //supportive boolean will be assigned based on what they select
    const opinion = supportive ? 'disapproval' : 'approval';
    return `Dear ${fName} ${lName},
    My name is ${this.props.userName}, and I'm one of your constituents.
    I'm sending this email to voice my ${opinion} about ${this.props.bill_id} ${this.props.bill.title}.
    Voters like me consider this an important issue, and I wanted to reach out personally to show you
    how much I care. Thank you for hearing me out.

    Sincerely,
    ${this.props.userName}
    `;
  }

  emailRep(fName, lName, emailAddress){
    debugger
    Communications.email(
      [emailAddress],
      null,null,
      this.buildEmail());
    }


    render(){
      const { icons, container } = styles;
      return(
        <ListView
          dataSource={this.state.dataSource}
          renderRow={representative => {
            const rep = representative[1];
            return(
              <View style={container}>
                <Text>{rep.fName} {rep.lName}</Text>
                <View style={icons}>
                  <Icon.Button name="phone-square"
                    size={40}
                    color="#009E11"
                    margin={0}
                    padding={0}
                    backgroundColor="white"
                    onPress={() => this.callRep(rep.phNum)}
                    style={ {paddingRight: 10}} />
                  <Icon.Button name="envelope"
                    size={40}
                    color="#CF2A28"
                    margin={0}
                    padding={0}
                    backgroundColor="white"
                    onPress={() => this.emailRep(rep.fName, rep.lName, rep.email)}
                    style={{}} />
                </View>
              </View>
            )}}
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
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    };

    export default RepresentativesView;
