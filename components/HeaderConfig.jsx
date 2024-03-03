// HeaderConfig.jsx
// Platform specific modifications in this file (verified)

// Purpose: This file contains the header options for the app.

// TODO: The client has asked for the header to be a different color, implement that

// React and React Native modules
import React from 'react';
import { Image, Platform } from 'react-native';

export const headerOptions = {
  headerTitle: () => {
    if (Platform.OS === 'ios') {
      return null; // Return null to hide the logo on iOS
    } else {
      return (
        <Image
          style={{ width: 200, height: 90, alignSelf: 'center', marginTop: -10}}
          source={require('../assets/clientlogo.png')}
          resizeMode="contain"
        />
      );
    }
  },
  headerTitleAlign: 'center',
  headerStyle: {
    height: 60,
    backgroundColor: '#9DFF21',
  },
};