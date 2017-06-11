import React from 'react';
import {Image, Text, View, Linking} from 'react-native';

const SponsorBillView = (sponsor) => {
  const { sponsorText, sponsorImage } = styles;
  // debugger
  const { fname, lname, imgUrl, email, party, siteUrl, state} = sponsor;
  const pic  = {
    uri: 'https://dccouncil.us/files/user_uploads/member_photos/barry.jpg'
  };
  // replaace with correct pic
  return(
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Image style={sponsorImage} source={pic} />
      </View>
      <View style={{flexDirection: 'column', flex: 1, paddingTop: 10}}>
        <Text style={sponsorText}> {fname} {lname} </Text>
        <Text style={sponsorText}> {party} </Text>
          <Text style={{color: 'blue'}}
          onPress={() => Linking.openURL(`${siteUrl}`)}>
          Official Website
        </Text>
      </View>
    </View>
  );
};

const styles = {
  sponsorText: {
    paddingBottom: 2,
    fontSize: 14
  },
  sponsorImage: {
    height: 100,
    borderRadius: 50,
    width: 100
  }
};
export default SponsorBillView;
