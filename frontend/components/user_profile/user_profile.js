import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';


class UserProfile extends React.Component {
  static navigationOptions = {
    title: "You"
  };

  constructor(props){
    super(props);
  }

  render(){
    console.log('THESE ARE THE PROPS',this.props);
    const {navigate} = this.props.navigation;
    return(
      <View>
        <Text>AYYY</Text>
        <Button
          onPress={() => {
            navigate('CustomizeInterests');
          }}
          subjects={this.props.subjects}
          title='Customize Your Interests'
          >
        </Button>
        <Button
          onPress={() => {
            navigate('Settings');
          }}
          user={this.props.currentUser}
          title='Settings'>
        </Button>
        <Button
          onPress={() => {
            this.props.logout();
          }}
          title='Log out'>
        </Button>
    </View>
  );
  }
}
export default UserProfile;
