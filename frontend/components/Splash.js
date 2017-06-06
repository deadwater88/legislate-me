import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection, Button } from '../common';

const Splash = () => {
  const { headerStyle, imageStyle} = styles;
  const pic  = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
  return (
    <Card>
      <CardSection>
        <Text style={headerStyle}> Now is the time for action. Make your voice heard </Text>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={pic}/>
      </CardSection>
      <CardSection>
        <Button>
          Get Started
        </Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  },
  imageStyle: {
    flex: 2,
    width: 100,
    height: 100
  }
};

export default Splash;
