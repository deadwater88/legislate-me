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
        <View style={{flex: 1}}>
          <Icon name='account-circle' size={55}/>
          <Text style={styles.username}>You</Text>
        </View>
        <View style={{flex: 2, alignContent: 'center'}}>
          <Button
            color='black'
            onPress={() => {
              navigate('CustomizeInterests');
            }}
            subjects={this.props.subjects}
            title='Customize Your Interests'
            >
          </Button>
          <Button
            color='black'
            onPress={() => {
              navigate('UserSettings');
            }}
            user={this.props.currentUser}
            title='Settings'>
          </Button>
          <Button
            color='black'
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
    fontSize: 30,
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
