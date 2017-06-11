import React from 'react';
import {Image, Text, View, Linking} from 'react-native';

const SponsorBillView = ({sponsor}) => {
  const { sponsorText, sponsorImage } = styles;

  // replaace with correct pic
  if (sponsor){
    const { fName, lName, imgUrl, email, party, siteUrl, state} = sponsor;
    debugger
    const pic  = {
      uri: imgUrl
    };
    return(
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Image style={sponsorImage} source={pic} />
        </View>
        <View style={{flexDirection: 'column', flex: 1, paddingTop: 10}}>
          <Text style={sponsorText}> {fName} {lName}</Text>
          <Text style={sponsorText}> {party} </Text>
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL(`${siteUrl}`)}>
            Official Website
          </Text>
        </View>
      </View>
    )
  } else {
    return (
      <Text></Text>
    )
  }
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
