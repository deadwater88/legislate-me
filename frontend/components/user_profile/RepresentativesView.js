import React from 'react';
import { ListView, View, Text } from 'react-native';
import { Button, CardSection} from '../common';
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';
import { zipped } from '../../reducers/selectors';

class RepresentativesView extends React.Component {
  //bill view passes rep objects to representative view
  //in below code, assuming I have a this.props.reps objects

  constructor(props){
    super(props);
    debugger;
    this.supportBill = this.supportBill.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this.state = {  showOptions: false,
      support: '',
      emailThisRepresentative: ''};

      this.emailRep = this.emailRep.bind(this);
      this.callRep = this.callRep.bind(this);
      debugger;
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
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
      this.emailRep(representative.name, representative.email);
      this.setState({emailThisRepresentative: ''});
    }

    callRep(phoneNum){
      Communications.phonecall(phoneNum, true);
    }

      buildEmail(fName, lName, supportive){
        //supportive boolean will be assigned based on what they select
        const opinion = this.state.support ? 'approval' : 'disapproval';
        return `Dear ${name},
        My name is ${this.props.userName}, and I'm one of your constituents.
        I'm sending this email to voice my ${opinion} about ${this.props.bill_id} ${this.props.bill.title}.
        Voters like me consider this an important issue, and I wanted to reach out personally to show you
        how much I care. Thank you for hearing me out.

        Sincerely,
        ${this.props.userName}
        `;
      }

      emailRep(fName, lName, emailAddress){
        Communications.email(
          [emailAddress],
          null,null,
          this.buildEmail());
      }


      render(){
        const { icons, container } = styles;
        if(this.state.showOptions){
          return(
            <View style={{marginTop: 22}}>
              <View>
                <Text>Would you like to express support or opposition for this bill?</Text>
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
                  );}}
                  />
            );
          }
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
