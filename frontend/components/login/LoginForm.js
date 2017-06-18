import React, { Component} from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, TextInput, StackNavigator, ToastAndroid, Image  } from 'react-native';
import { Card, CardSection, Button, Input} from '../common';
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
      this.demoIn = this.demoIn.bind(this);
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

    demoIn(){
      this.props.demoIn();
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
      this.props.navigation.navigate('SubmitAddress');
    }

  render(){
    const pic = require('../subjects/images/gradient.jpg');
    const user_pic = require('../subjects/images/gradient.jpg');
    if(this.state.login){
      return(

        <View style={style.parentView}>

          <CardSection>
            <Text style={{color: 'white', margin: 5}}>
              Enter your email address to sign in or create an account
            </Text>
          </CardSection>
          <View>
            <CardSection >
              <Text style={style.label}>
                Email address
              </Text>
            </CardSection>
            <CardSection >
              <TextInput
                style={style.text}
                placeholderTextColor='gray'
                placeholder="example@example.com"
                label="Email"
                value={this.state.email}
                onChangeText={email =>this.setState({email})}
                />
            </CardSection>
          </View>
          <View>
            <CardSection >
              <Text style={style.label}>
                Password
              </Text>
            </CardSection>
            <CardSection>
              <TextInput
                style={style.text}
                secureTextEntry
                placeholder="password"
                placeholderTextColor='gray'
                label="Password"
                value={this.state.password}
                onChangeText={password =>this.setState({password})}
                />
            </CardSection>
          </View>
          <View>
            <TouchableOpacity onPress={this.onLogIn} style={style.buttonStyle}>
              <Text style={style.textStyle}>
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.demoIn} style={style.buttonStyle}>
              <Text style={style.textStyle}>
                Continue without signing in
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 50, alignSelf: 'center'}}>
            <TouchableHighlight onPress={this.onToggleSignIn} >
              <Text>Or sign up</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }else{
      return(
        <View style={style.parentView}>
          <CardSection>
            <Text style={{color: 'white'}}>
            </Text>
          </CardSection>
          <View>
            <View style={style.parentView}>
              <CardSection >
                <Text style={style.label}>
                  First Name
                </Text>
              </CardSection>
              <CardSection >
                <Input
                  style={style.text}
                  placeholder="First Name"
                  placeholderTextColor='white'
                  value={this.state.firstName}
                  onChangeText={fName =>this.setState({fName})}
                  />
              </CardSection>
            </View>
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
          </View>
          <CardSection>
            <TouchableOpacity onPress={this.onSignUp} style={style.buttonStyle}>
              <Text style={style.textStyle}>
                Sign up
              </Text>
            </TouchableOpacity>
          </CardSection>
          <View style={{marginBottom: 50, alignSelf: 'center'}}>
            <TouchableHighlight onPress={this.onToggleSignIn}>
              <Text> Or log in </Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }

  }
}

const style = {
  parentView: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'left',
    flex: 1,
    height: 50,
    color: '#808080',
    justifyContent: 'flex-start',
    fontSize: 20,
    marginBottom: 5,
  },
  label: {
    textAlignVertical: 'center',
    textAlign: 'left',
    flex: 1,
    color: '#808080',
    justifyContent: 'flex-start',
    fontSize: 20,
    paddingLeft: 5
  },
  buttonStyle: {
    alignSelf: 'center',
    borderRadius: 3,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#00AB6C',
    margin: 10,
    height: 60,
    width: '70%'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#00AB6C',
    fontSize: 18,
    padding: 14

  }
};

// alignSelf: 'center',
// alignContent: 'center',
// alignItems: 'center',


export default LoginForm;
