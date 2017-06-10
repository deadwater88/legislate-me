import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Input } from '../common';
import RepresentativesView from './RepresentativesView';

class UserSettings extends React.Component {
  constructor(props){
    super(props);
    this.state = { address: ''};
    this.signOut = this.signOut.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
  }

  changeAddress(){
    this.props.changeAddress(this.state.address);
  }

  signOut(){
    this.props.signOut();
  }

  deleteUser(){
    this.props.deleteUser();
  }

  render(){
    const { columns, title, buttons } = styles;
    return(
      <Card>
        <View>
          <Text style={title}>User Settings</Text>
          <Text>Your representatives</Text>
          <RepresentativesView reps="BLAH" />
        </View>
        <CardSection>
          <Input
             placeholder="Change your address"
             label="New address"
             value={this.state.address}
             onChangeText={address => this.setState({address})}
              />
        </CardSection>
        <CardSection>
          <Button onPress={this.props.changeAddress}>
            Change Your Address
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.props.signOut}>
            Sign out
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.props.deleteUser}>
            Delete your account
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  columns: {
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 40
  },
  repsView: {
    paddingBottom: 40
  },
  buttons: {
    paddingBottom: 20
  }
};
export default UserSettings;
