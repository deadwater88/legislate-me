import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, Input} from '../common';

class LoginForm extends Component {
constructor(props){
  super(props);
  this.state = {email: '',
                password: ''};
}


  render(){
    return(
      <Card>
        <CardSection>
          <Text> oAuth Icons, very clickable </Text>
        </CardSection>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email =>this.setState({email})}
             />
        </CardSection>

        <CardSection >
          <Input
            secureTextEntry
            placeholder="swedishfish42"
            label="Password"
            value={this.state.password}
            onChangeText={password =>this.setState({password})}
             />
        </CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {

};

export default LoginForm;
