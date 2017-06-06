import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.header}>
      Welcome to LegislateMe!
    </Text>
    <Text style={styles.subheader}>

      Pick a few subjects you are interested in:
    </Text>
  </View>
);

// add bottom separator
const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  header: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: '90%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subheader: {
    paddingTop: 10
  }
});

export default Header;
