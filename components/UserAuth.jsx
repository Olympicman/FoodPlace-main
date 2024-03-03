// UserAuth.jsx
// No platform specific modifications in this file (verified)

// React and React Native modules
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Image } from 'react-native';

// Firebase modules
import { auth } from './firebaseConfig'; // Import the auth object from firebaseConfig
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Custom components
import StyledButton from './StyledButton'; // Import the StyledButton component

const LoginScreen = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User account created & signed in!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in!');
      onLoginSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Note to self: Learn what is regex and how to use it
    return regex.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/horizontalclientlogo.png')}
          style={styles.image}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#ffffff'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#ffffff'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <StyledButton onPress={handleSignUp} title="Crear Cuenta" />
      <StyledButton onPress={handleSignIn} title="Iniciar Sesión" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
    color: '#181818',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#ffffff',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 50, // Adjust as needed
    marginBottom: 20,
  },
  image: {
    width: 120, // Adjust width as needed
    height: 120, // Adjust height as needed
    borderRadius: 60, // Make it circular
    borderColor: '#9DFF21',
    borderWidth: 2,
  },
  
});

export default LoginScreen;
