import React from 'react';
import {Image, Text, View, Linking} from 'react-native';

const SponsorBillView = ({sponsor}) => {
  const { sponsorName, sponsorImage } = styles;
  const pic  = {
    uri: 'http://dccouncil.us/files/user_uploads/member_photos/barry.jpg'
  };
  return(
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Image style={sponsorImage} source={pic} />
      </View>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={sponsorName}> {sponsor.name}</Text>
        <Text > {sponsor.role}</Text>
        <Text > {sponsor.party}</Text>
          <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL(`${sponsor.website}`)}>
          Official Website
        </Text>
      </View>
    </View>
  );
};

const styles = {
  sponsorName: {
  },
  sponsorImage: {
    height: 100,
    borderRadius: 50,
    width: 100
  }
};
export default SponsorBillView;
