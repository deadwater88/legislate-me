import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.goToBookmarks = this.goToBookmarks.bind(this);
    this.goToExplore = this.goToExplore.bind(this);
  }

  render(){
    const {buttonStyle} = styles;
    return (
      <View>
        <TouchableOpacity onPress={this.goToProfile} style={buttonStyle}>
        <Icon.Button name="home" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
          Login with Facebook
        </Icon.Button>
        </TouchableOpacity>
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

  }
};

export default Navbar;
