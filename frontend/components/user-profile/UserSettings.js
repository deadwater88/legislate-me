import React from 'react';
import { Button, Card, CardSection, Input } from '../common';
import RepresentativesView from './RepresentativesView';


class UserSettings extends React.Component {
  constructor(props){
    super(props);
    this.state = { address: ''};
    this.signOut = this.signOut.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
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
          <Text>Your current representatives</Text>
          <RepresentativesView reps={this.props.representatives} />
          <Input
            placeholder={this.props}
            label="Change your address"
            value={this.state.address}
            onChangeText={address =>this.setState({address})}
             />
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
