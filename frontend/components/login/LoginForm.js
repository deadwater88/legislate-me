import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StackNavigator } from 'react-native';
import { Button, Card, CardSection, Input} from '../common';
import SubmitAddress from './submit_address/submit_address';
class LoginForm extends Component {
constructor(props){
  super(props);
  this.state = {name: '',
                email: '',
                password: '',
                login: true};
  this.onToggleSignIn = this.onToggleSignIn.bind(this);
  this.onSignUp = this.onSignUp.bind(this);
  this.onLogIn = this.onLogIn.bind(this);
  this.redirectToAddressPage = this.redirectToAddressPage.bind(this);
}
onToggleSignIn(){
  let toggle = !this.state.login;
  this.setState({login: toggle});
}

onLogIn(){
  this.props.login({
    name: this.state.name,
    email: this.state.email,
    password: this.state.password
  }).then(()=>{

  });
}

onSignUp(){
  this.props.signup({
    name: this.state.name,
    email: this.state.email,
    password: this.state.password
  }).then(this.redirectToAddressPage);
}

componentDidUnmount(){
  this.props.clearErrors();
}

redirectToAddressPage(){
  this.props.navigate('')
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
              placeholder="Full Name"
              label="Name"
              value={this.state.name}
              onChangeText={name =>this.setState({name})}
               />
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
              placeholder="Full Name"
              label="Name"
              value={this.state.name}
              onChangeText={name =>this.setState({name})}
               />
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
