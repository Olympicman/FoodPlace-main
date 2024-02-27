// styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#181818', //#D8BFD8
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontSize: 16,
      marginTop: 20,
    },
  });


const tabNavigatorStyles = {
    tabBarStyle: {
      backgroundColor: '#181818', // Your custom background color
      paddingBottom: 5, // Example of additional styling
    },
    headerStyle: {
      backgroundColor: '#181818', // Applies to the navigation header if present
    },
    headerTintColor: '#ffffff', // Applies to the navigation header if present
    tabBarActiveTintColor: '#f01470',
    tabBarInactiveTintColor: '#ffffff',
  };

export { styles, tabNavigatorStyles };