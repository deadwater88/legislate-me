import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
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
      <View style={{flex: 1, paddingBottom: 40, flexDirection:'column', justifyContent: 'center', alignItems: 'center', backgroundColor:"white"}}>
        <Text style={styles.headerStyle}>LegislateMe</Text>
        <Text style={{marginBottom: 30}}>Influence local policy.</Text>
        <View alignItems="stretch">
          <OAuthButtons />
          <TouchableOpacity
            onPress={()=> navigate('Login')}>
            <Text style={{padding: 30, alignSelf: 'stretch', color: '#015249', textAlign: 'center' }}>Sign in with email</Text>
          </TouchableOpacity>
        </View>
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
