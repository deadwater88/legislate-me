import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from '../common';
import { StackNavigator } from 'react-navigation';

class Splash extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { containerStyle, headerStyle} = styles;
    const pic  = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Golden_Gate_bridge_pillar.jpg/400px-Golden_Gate_bridge_pillar.jpg'
    };
    const navigate = this.props.navigation;

    return (
      <Image style={containerStyle} source={pic}>
        <Text style={headerStyle}>Make your voice heard </Text>
        <Button
          onPress={() => {
            navigate('Login');
          }}>
          Get Started
        </Button>
      </Image>
    )
  }
};

const styles = {
  containerStyle: {
    height: '100%',
    backgroundColor:'transparent',
    flexDirection: 'column',

    justifyContent: 'flex-start'
  },
  headerStyle: {
    color: 'white',
    fontWeight: '900',
    alignSelf: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 30,
    marginBottom: 330,
    fontSize: 34,
    height: 150
  }
};

export default Splash;
