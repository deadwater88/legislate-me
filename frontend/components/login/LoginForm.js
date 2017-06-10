import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StackNavigator } from 'react-native';
import { Button, Card, CardSection, Input} from '../common';
import SubmitAddress from './submit_address/submit_address';
import OAuthButtons from './OAuth/oauth_buttons';

class LoginForm extends Component {
  constructor(props){
    super(props);
    console.log("In login");
    this.state = {
      fName: '',
      lName: '',
      email: '',
      password: '',
      login: true};
      this.onToggleSignIn = this.onToggleSignIn.bind(this);
      this.onSignUp = this.onSignUp.bind(this);
      this.onLogIn = this.onLogIn.bind(this);
      this.redirectToAddressPage = this.redirectToAddressPage.bind(this);
      this.redirectToHome = this.redirectToHome.bind(this);
    }

    onToggleSignIn(){
      let toggle = !this.state.login;
      this.setState({login: toggle});
    }

    onLogIn(){
      this.props.login({
        email: this.state.email,
        password: this.state.password
      }).then(this.redirectToHome);
    }

    onSignUp(){
      console.log("signing up");
      this.props.signup({
        fName: this.state.fName,
        lName: this.state.lName,
        email: this.state.email,
        password: this.state.password
      }).then(this.redirectToAddressPage);
    }

    redirectToHome(){
      //home is BillNavigator
      this.props.navigation.navigate('Home');
    }

    componentWillUnmount(){
      this.props.clearErrors();
    }

  redirectToAddressPage(){
    this.props.navigation.navigate('SubmitAddress');
  }

  render(){
    if(this.state.login){
      return(
        <Card>
          <CardSection>
            <OAuthButtons/>
          </CardSection>
          <CardSection>
            <Text>------or------</Text>
          </CardSection>
          <CardSection>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={this.state.email}
              onChangeText={email =>this.setState({email})}
              />
          </CardSection>

          <CardSection>
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
          <CardSection>
            <TouchableHighlight onPress={this.onToggleSignIn}>
              <Text>Or sign up</Text>
            </TouchableHighlight>
          </CardSection>
        </Card>
      );
    }else{
      return(
        <Card>
          <CardSection>
            <OAuthButtons/>
          </CardSection>
          <CardSection>
            <Text>------or------</Text>
          </CardSection>
          <CardSection>
            <Input
              placeholder="First Name"
              label="First Name"
              value={this.state.firstName}
              onChangeText={fName =>this.setState({fName})}
              />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Last Name"
              label="Last Name"
              value={this.state.lastName}
              onChangeText={lName =>this.setState({lName})}
              />
          </CardSection>
          <CardSection>
            <Input
              placeholder="user@email.com"
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
          <CardSection>
            <TouchableHighlight onPress={this.onToggleSignIn}>
              <Text>Or log in</Text>
            </TouchableHighlight>
          </CardSection>

        </Card>
      );
    }

  }
}

// const styles = {
//   containerStyle: {
//     backgroundColor: 'black'
//   },
//   oauthStyle: {
//     color: 'blue',
//     paddingRight: 5,
//     paddingLeft: 5,
//     fontSize: 18,
//     lineHeight: 23,
//     flex: 1
//   },
//   emailStyle: {
//     flex: 2,
//     width: 100,
//     height: 100
//   }
// };




export default LoginForm;
