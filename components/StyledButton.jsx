// StyledButton.jsx
// No platform specific modifications in this file (verified)

// Purpose: This file contains the StyledButton component which is used to create a custom styled button.

// React and React Native modules
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// Custom components
import FontLoader from './FontLoader';

const StyledButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <FontLoader>
        <Text style={[styles.buttonText, {fontFamily: 'Nunito-Bold'}]}>{title}</Text>
      </FontLoader>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f01470',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    minWidth: 200,
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default StyledButton;
