import React from 'react';
import { ListView, View, Text } from 'react-native';
import { Button, CardSection} from '../common';
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';
import { zipped } from '../../reducers/selectors';

class RepresentativesView extends React.Component {

  constructor(props){
    super(props);

    this.supportBill = this.supportBill.bind(this);
    this.showOptions = this.showOptions.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.emailRep = this.emailRep.bind(this);
    this.callRep = this.callRep.bind(this);
    this.state = {
      showOptions: false,
      support: '',
      emailThisRepresentative: '',
      dataSource: ds.cloneWithRows(zipped(this.props.representatives))
      };
    }

    showOptions(representative) {
      const newState = !this.state.showOptions;
      this.setState({showOptions: newState,
        emailThisRepresentative: representative});
    }

    supportBill(answer, representative){
      this.setState({showOptions: false, support: answer});
      this.emailRep(representative.fName, representative.lName, representative.email, answer);
      this.setState({emailThisRepresentative: ''});
    }

    callRep(phoneNum){
      Communications.phonecall(phoneNum, true);
    }

    buildEmail(fName, lName, supportive){
      //supportive boolean will be assigned based on what they select
      const opinion = supportive ? 'approval' : 'disapproval';
      return(
`Dear Representative ${fName} ${lName},

My name is ${this.props.userName}, and I'm one of your constituents. I'm sending this email to voice my ${opinion} of ${this.props.bill.bill_id} "${this.props.bill.title}" Voters like me consider this an important issue, and I wanted to reach out personally to show you how much I care. Thank you for hearing me out.

Sincerely,
${this.props.userName}`);
    }

      emailRep(fName, lName, emailAddress, answer){
        let title = this.props.bill.title;
        Communications.email(
          [emailAddress],
          null,null, title,
          this.buildEmail(fName, lName, answer));
      }


      render(){
        const { icons, container, contactText, repNames } = styles;
        if(this.state.showOptions){
          return(
            <View style={{marginTop: 22}}>
              <View>
                <Text style={contactText}>Would you like to express support or opposition for this bill?</Text>
                <CardSection>
                  <Button  onPress={() => this.supportBill(true, this.state.emailThisRepresentative)}> Support! </Button>
                </CardSection>
                <CardSection>
                  <Button  onPress={() => this.supportBill(false, this.state.emailThisRepresentative)}> Opposition! </Button>
                </CardSection>
              </View>
            </View>
          );
          } else {
            return(

              <ListView
                dataSource={this.state.dataSource}
                renderRow={representative => {
                  const rep = representative[1];
                  return(
                    <View style={container}>
                      <Text style={repNames}>{rep.fName} {rep.lName}</Text>
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
                          onPress={() => this.showOptions(rep)}
                          style={{}} />
                      </View>
                    </View>
                  );}}
                  />
            );
          }
        }
      }
    const styles = {
      icons: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: 'white'

      },
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
      },
      contactText: {
        color: 'black',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
      },
      repNames: {
        color: 'black',
        fontSize: 20,
        marginLeft: 2
      }
    };
            export default RepresentativesView;
