// StyledButton.jsx

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
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
