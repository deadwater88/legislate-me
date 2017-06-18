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
    const { container, columns, title } = styles;
    const pic  = {
      uri:  'https://upload.wikimedia.org/wikipedia/commons/4/4f/US_Capitol_west_side.JPG'
    };
    return(

      <View style={container}>
        <Text style={title}>Settings</Text>
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
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 100
  }
};

export default UserSettings;
