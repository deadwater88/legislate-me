import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.goToBookmarks = this.goToBookmarks.bind(this);
    this.goToDiscover = this.goToDiscover.bind(this);
  }

  render(){
    const { bannerStyle, buttonStyle} = styles;
    return (
      <View style={bannerStyle}>
          <Icon name="home"  onPress={this.goToHome} style={buttonStyle}/>
          <Icon name="bookmark" onPress={this.goToBookmarks} style={buttonStyle}/>
          <Icon name="globe" onPress={this.goToDiscover} style={buttonStyle}/>
          <Icon name="user-o" onPress={this.goToProfile} style={buttonStyle}/>
      </View>
    )
  }

  goToProfile(){
    console.log("Profile");
  }
  goToHome(){
    console.log("Home");
  }
  goToDiscover(){
    console.log("Discover");
  }
  goToBookmarks(){
    console.log("Bookmarks");
  }
}


const styles = {
  buttonStyle: {
    color: 'white',
    fontSize: 25
  },
  bannerStyle: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 16,
    paddingLeft: 24,
    paddingRight: 24
  }
};

export default Navbar;
