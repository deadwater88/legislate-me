import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.parentView}>
        <View style={{flex: 1.5}}>
          <Icon name='account-circle' size={35}/>
          <Text style={styles.username}>Username (will fill in later)</Text>
        </View>
        <View style={{flex: 1.0}}>
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
              navigate('UserSettings');
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
    </View>
  );

  }
}
const styles = StyleSheet.create({
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5
  },
  parentView:{
    flex: 1,
    alignContent: 'center',
    paddingTop: 20
  }
});
export default UserProfile;
