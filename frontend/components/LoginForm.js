import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
constructor(props){
  super(props);
  this.state = {email: '',
                password: '',
                login: true};
  this.onToggleSignIn = this.onToggleSignIn.bind(this);
  this.onSignUp = this.onSignUp.bind(this);
  this.onLogIn = this.onLogIn.bind(this);
}
onToggleSignIn(){
  let toggle = !this.state.login;
  this.setState({login: toggle});
}

onLogIn(){
  this.props.login({
    email: this.state.email,
    password: this.state.password
  });
}

onSignUp(){
  this.props.signup({
    email: this.state.email,
    password: this.state.password
  });
}

componentDidUnmount(){
  this.props.clearErrors();
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
            <Button onPress={this.onLogIn}>
              Log in
            </Button>
          </CardSection>
          <TouchableHighlight onPress={this.onToggleSignIn}>
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
            <Button onPress={this.onSignUp}>
              Sign Up!
            </Button>
          </CardSection>
          <TouchableHighlight onPress={this.onToggleSignIn}>
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
