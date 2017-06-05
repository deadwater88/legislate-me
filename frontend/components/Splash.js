import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, Button } from './common';

const Splash = () => {
  const { headerStyle, imageStyle} = styles;
  return (
    <View>
    <Text> Now is the time for action </Text>
    <Image/>
      <Button>
        Make your voice heard
      </Button>
    </View>

  );
};

const styles = {
  headerStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  imageStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};

export default Splash;
