// FontLoader.jsx
// No platform specific modifications in this file (verified)

// Purpose: This file contains the FontLoader component which is used to load custom fonts for the app.

// React and React Native modules
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
// Expo modules
import { useFonts } from 'expo-font';

const FontLoader = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'Modak-Regular': require('../assets/fonts/Modak-Regular.ttf'),
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
    // Load more fonts here if needed
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return children;
};

export default FontLoader;