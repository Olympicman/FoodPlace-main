import LoadingScreen from './components/LoadingScreen';
import { useState } from 'react';
import AppLayout from './components/AppLayout';
import LoginScreen from './components/UserAuth';

export default function App() {

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