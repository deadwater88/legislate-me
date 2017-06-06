import React from 'react';
import { Button, Card, CardSection, Input } from '../common';


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
    return(
      <Card>
        <CardSection >
          <Text>{this.props.representatives.errors}</Text>
          <Input
            placeholder={this.props}
            label="Change your address"
            value={this.state.address}
            onChangeText={address => this.setState({address})}
             />
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

export default UserSettings;
