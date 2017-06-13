import React, { Component} from 'react';
import { View, Text, TouchableHighlight, TextInput, StackNavigator, ToastAndroid, Image  } from 'react-native';
import { Button, Card, CardSection, Input} from '../common';
import SubmitAddress from './submit_address/submit_address';
import OAuthButtons from './OAuth/oauth_buttons';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      password: '',
      login: true};
      this.onToggleSignIn = this.onToggleSignIn.bind(this);
      this.onSignUp = this.onSignUp.bind(this);
      this.onLogIn = this.onLogIn.bind(this);
    }

    componentWillReceiveProps(newProps){
        let errorObject = newProps.errors;
        let errors = ""; //value is going to be an array.
        Object.keys(errorObject).forEach(errorCategory => {
          errors += errorCategory;
          errors += ": " + errorObject[errorCategory].join(" ");
          errors += '\n';
        });
        errors.length > 0 ? ToastAndroid.showWithGravity(errors, ToastAndroid.SHORT, ToastAndroid.TOP) : null;
      if (newProps.currentUser && !newProps.currentUser.setup) {
        this.redirectToAddressPage();
      } else if (newProps.currentUser && newProps.setup){
        this.redirectToHome();
      }
    }

    errorsChanged(newProps){
      return Object.keys(this.props.errors).length !== Object.keys(newProps.errors).length;
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
        fName: this.state.fName,
        lName: this.state.lName,
        email: this.state.email,
        password: this.state.password
      });
    }

    redirectToHome() {
      this.props.navigation.navigate('Home');
    }

    componentWillUnmount(){
      this.props.clearErrors();
    }


    redirectToAddressPage(){
      console.log('redirect to address page?');
      this.props.navigation.navigate('SubmitAddress');
    }

  render(){
    const pic = require('../subjects/images/gradient.jpg');

    if(this.state.login){
      return(
        <Image style={style.parentView} source={pic}>
        <View>
          <CardSection>
            <OAuthButtons/>
          </CardSection>
          <CardSection>
            <Text style={{color: 'white'}}>
              ------------------------------------ or ------------------------------------
            </Text>
          </CardSection>
          <CardSection>
            <TextInput
              style={style.text}
              placeholderTextColor='grey'
              placeholder="user@email.com"
              label="Email"
              value={this.state.email}
              onChangeText={email =>this.setState({email})}
              />
          </CardSection>

          <CardSection>
            <TextInput
              style={style.text}
              secureTextEntry
              placeholder="password"
              placeholderTextColor='grey'
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
              <Text style={{color: 'white'}}>Or sign up</Text>
            </TouchableHighlight>
          </CardSection>
        </View>
      </Image>
      );
    }else{
      return(
        <Image style={style.parentView} source={pic}>
        <Card>
          <CardSection>
            <OAuthButtons/>
          </CardSection>
          <CardSection>
            <Text style={{color: 'white'}}>
              ------------------------------------ or ------------------------------------
            </Text>
          </CardSection>
          <CardSection>
            <Input
              style={style.text}
              placeholder="First Name"
              placeholderTextColor='white'
              label="First Name"
              value={this.state.firstName}
              onChangeText={fName =>this.setState({fName})}
              />
          </CardSection>
          <CardSection>
            <Input
              style={style.text}
              placeholder="Last Name"
              placeholderTextColor='white'
              label="Last Name"
              value={this.state.lastName}
              onChangeText={lName =>this.setState({lName})}
              />
          </CardSection>
          <CardSection>
            <Input
              style={style.text}
              placeholder="user@email.com"
              placeholderTextColor='white'
              label="Email"
              value={this.state.email}
              onChangeText={email =>this.setState({email})}
              />
          </CardSection>

          <CardSection >
            <Input
              style={style.text}
              secureTextEntry
              placeholder="password"
              placeholderTextColor='white'
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
              <Text style={style.text}>Or log in</Text>
            </TouchableHighlight>
          </CardSection>
        </Card>
      </Image>
      );
    }

  }
}

const style = {
  parentView: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  text: {
    textAlignVertical: 'top',
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    fontSize: 20
  }
};




export default LoginForm;
