import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {navigate} = this.props.navigation;
    // const pic = require('../subjects/images/gradient.jpg');
    return(
      <Image style={styles.parentView} source={pic}>
        <View style={{flex: 1}}>
          <Icon name='account-circle' size={55} color={'white'} style={{marginTop: 50, alignSelf: 'center'}}/>
          <Text style={styles.username}>You</Text>
        </View>
        <View style={{flex: 1, alignContent: 'center'}}>
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
    </Image>
  );

  }
}
const styles = StyleSheet.create({
  username: {
    fontSize: 50,
    marginBottom: 170,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    color: 'white'
  },
  parentView:{
    flex: 1,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});
export default UserProfile;
