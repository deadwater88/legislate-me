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
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/San_francisco_in_fog_with_rays.jpg/558px-San_francisco_in_fog_with_rays.jpg'
    };
    const navigate = this.props.navigation;

    return (
      <Image style={containerStyle} source={pic}>
        <Text style={headerStyle}> Now is the time for action. Make your voice heard </Text>
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
    justifyContent: 'center'
  },
  headerStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 6,
  }
};

export default Splash;
