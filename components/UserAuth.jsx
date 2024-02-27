// UserAuth.jsx

import firebase from './firebaseConfig';

// Sign up new users
const signUpUser = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');
  } catch (error) {
    console.error(error);
  }
};

// Sign in existing users
const signInUser = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in!');
  } catch (error) {
    console.error(error);
  }
};

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    signUpUser(email, password);
  };

  const handleSignIn = () => {
    signInUser(email, password);
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default LoginScreen;