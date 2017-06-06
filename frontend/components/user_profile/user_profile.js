import React from 'react';
import { StackNavigator } from 'react-navigation';
import CustomizeInterestList from '../CustomizeInterestList/CustomizeInterestList';
import Settings from './settings';

class UserProfile extends React.Component {
  static navigationOptions = {
    title: "You"
  };

  constructor(props){
    super(props);
  }

  render(){
    const navigate = this.props.navigation.navigate;
    return(
      <View>
      <Button
        onPress={() => {
          navigate('CustomizeInterests');
        }}
        subjects={this.props.subjects}
        >
        Customize Your Interests
      </Button>
      <Button
        onPress={() => {
          navigate('Settings');
        }}
        user={this.props.currentUser}>
        Settings
      </Button>
      <Button
        onPress={() => {
          this.props.logout();
        }}>
        Settings
      </Button>
    </View>
  );
  }
}
export default UserProfile;

const UserProfileNavigator = StackNavigator({
  Settings: { screen: Settings },
  CustomizeInterests: {screen: CustomizeInterestList },
  UserProfile: { screen: UserProfile }
});
