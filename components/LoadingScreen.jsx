// LoadingScreen.jsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import FontLoader from './FontLoader';


const LoadingScreen = () => {

  return (
    <FontLoader>
      <View style={styles.container}>
        <Progress.CircleSnail 
          color={['#F01470', '#9DFF21']} 
          size={80} 
          thickness={5} 
          duration={700} 
        />
        <Text style={{ ...styles.text, fontFamily: 'Modak-Regular' }}>Cargando, por favor espere...</Text>
      </View>
    </FontLoader>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#ffffff',
  },
});

export default LoadingScreen;