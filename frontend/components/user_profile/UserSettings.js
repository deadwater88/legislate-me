import React from 'react';
import { Text, View, Image } from 'react-native';
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
    console.log(this.state.address);
    this.props.updateAddress(this.state.address);
  }

  signOut(){
    this.props.signOut();
  }

  deleteUser(){
    this.props.deleteUser();
  }

  render(){
    const { button, container, columns, title, yourReps } = styles;
    const pic  = {
      uri:  'https://upload.wikimedia.org/wikipedia/commons/4/4f/US_Capitol_west_side.JPG'
    };
    return(

      <View style={container}>
          <Text style={title}>User Settings</Text>
          <Input
             placeholder="1600 Foo St, San Jose, CA "
             label="Address:"
             value={this.state.address}
             onChangeText={address => this.setState({address})}
             />
            <Button onPress={this.props.updateAddress}>
              Change your address
            </Button>
            <Button onPress={this.props.signOut}>
              Sign out
            </Button>
            <Button onPress={this.props.deleteUser}>
              Delete your account
            </Button>
      </View>

    );
  }
}

const styles = {
  columns: {
    flexDirection: 'column'
  },
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 30
  },
  button: {
    marginBottom: 20
  },
  yourReps: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  }
};

export default UserSettings;
