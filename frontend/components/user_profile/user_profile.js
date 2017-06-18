import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text,  StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from '../common/Button';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {navigate} = this.props.navigation;
    const pic = require('../subjects/images/gradient.jpg');
    return(
      <View style={styles.parentView} >
        <View>
          <Icon name='user' size={80} color={'black'} style={{marginTop: 20, alignSelf: 'center'}}/>
          <Text style={styles.username}>You</Text>
        </View>
        <View style={{alignContent: 'center'}}>
          <Button
            onPress={() => {
              navigate('CustomizeInterests');
            }}
            subjects={this.props.subjects}>
            Customize Your Interests
          </Button>
          <Button
            onPress={() => {
              navigate('UserSettings');
            }}
            user={this.props.currentUser}>
            Settings
          </Button>
          <Button
            onPress={() => {
              this.props.logout();
            }}>
            Log out
          </Button>
        </View>
    </View>
  );

  }
}
const styles = StyleSheet.create({
  username: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15,
    color: 'black'
  },
  parentView:{
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});
export default UserProfile;
