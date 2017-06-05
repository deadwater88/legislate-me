import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
constructor(props){
  super(props);
  this.state = {email: '',
                password: '',
                login: true};
  this.onPressButton = this.onPressButton.bind(this);
}
onPressButton(){
  let toggle = !this.state.login;
  this.setState({login: toggle});
}

  render(){
    if(this.state.login){
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
              placeholder="password"
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
          <TouchableHighlight onPress={this.onPressButton}>
              <Text>Or sign up</Text>
          </TouchableHighlight>
        </Card>
      );
    }else{
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
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={password =>this.setState({password})}
               />
          </CardSection>
          <CardSection>
            <Button>
              Sign Up!
            </Button>
          </CardSection>
          <TouchableHighlight onPress={this.onPressButton}>
              <Text>Or log in</Text>
          </TouchableHighlight>
        </Card>
      );
    }

  }
}

const styles = {

};

export default LoginForm;
