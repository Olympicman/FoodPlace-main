// App.js
// Author: rodrigo rivera

// Purpose: Main entry point for the application. 
// This is the main component that will be rendered by the index.js file.

// React and React Native modules
import { useState } from 'react';

// Custom components
import AppLayout from './components/AppLayout';
import LoginScreen from './components/UserAuth';
import LoadingScreen from './components/LoadingScreen';


export default function App() {

  // State management hooks
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  }

  return (
    <>
      {isLoading ? (
      <LoadingScreen />
      ): isLoggedIn ? (
        <AppLayout/>
      ): 
      (
        <LoginScreen onLoginSuccess={handleLoginSuccess}/>
      )}
    </>
  );
}