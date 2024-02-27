// FontLoader.jsx
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
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