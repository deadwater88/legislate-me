import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
import OAuthButtons from './OAuth/oauth_buttons';
class Splash extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { containerStyle, headerStyle, imageBackgroundStyle} = styles;
    const {navigate} = this.props.navigation;

    return (
      <View style={{flex: 1, flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.headerStyle}>LegislateMe</Text>
        <Text>Influence local policy.</Text>
        <Button
          style={styles.buttonStyle}
          onPress={() => {
            navigate('Login');
          }}
          title="Sign in with email" />
        <OAuthButtons />
      </View>
  );
}
}

const styles = {
  headerStyle: {
    color: 'black',
    fontWeight: '900',
    fontSize: 35,
  },
};

export default Splash;
