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
    this.props.changeAddress(this.state.address);
  }

  signOut(){
    this.props.signOut();
  }

  deleteUser(){
    this.props.deleteUser();
  }

  render(){
    const { columns, title, repsView, address, imageStyle, signout } = styles;
    const pic  = {
      uri:  'https://upload.wikimedia.org/wikipedia/commons/4/4f/US_Capitol_west_side.JPG'
    };
    return(

      <Card>
        <View style={repsView}>
          <Text style={title}>User Settings</Text>
          <Text>Your representatives</Text>
          <RepresentativesView reps="BLAH" />
        </View>
        <CardSection>
          <Input
             placeholder="1600 Foo St, San Jose, CA "
             label="Address:"
             value={this.state.address}
             onChangeText={address => this.setState({address})}
             />
        </CardSection>
        <View style={address}>
          <CardSection >
            <Button onPress={this.props.changeAddress}>
              Change your address
            </Button>
          </CardSection>
        </View>
        <View>
          <CardSection>
            <Button onPress={this.props.signOut}>
              Sign out
            </Button>
          </CardSection>
        </View>
        <View style={signout}>
          <CardSection>
            <Button onPress={this.props.deleteUser}>
              Delete your account
            </Button>
          </CardSection>
        </View>
        <Image style={imageStyle} source={pic} />
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
