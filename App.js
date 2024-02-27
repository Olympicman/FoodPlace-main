import LoadingScreen from './components/LoadingScreen';
import { useState } from 'react';
import AppLayout from './components/AppLayout';
import LoginScreen from './components/UserAuth';

export default function App() {

  const [isLoading, setIsLoading] = useState(false);


  return (
    <>
      {isLoading ? (<LoadingScreen />): 
      (
        <AppLayout/>
      )}
    </>
  );
}