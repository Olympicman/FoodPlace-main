// AppLayout.jsx
// No platform specific modifications in this file (verified)

// Purpose: This component is the main layout for the application. 
// It contains the bottom tab navigator and the main screens for the app.
// It is the main component that will be rendered by the App.js file.

// TODO: Abstract as much as possible into separate files and components
// TODO: The bottom tabs look weird on iOS, fix that
// TODO: The client has asked to replace the points tab with an special offers tab, implement that


// React and React Native modules
import React from 'react';
import { Text, View, Image, SafeAreaView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Custom components
import FontLoader from './FontLoader';
import { headerOptions } from './HeaderConfig';
import PointsProgressBar from './PointBar';
import NewsAndOffersCarousel from './NewsCarousel';

// Styles
import { styles, tabNavigatorStyles } from '../styles';


const Greeting = () => {

  const hour = new Date().getHours();

  const greeting = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches';

  return (
    <View>
      <Text style={{...styles.text, fontFamily: 'Modak-Regular'}}>{greeting}</Text>
    </View>
  )

}

function Inicio() {
  return (
    <FontLoader>
      <View style={[styles.container, {justifyContent: 'top'}]}>
        <Greeting />
        <SafeAreaView>
          <PointsProgressBar points={4} user={"Rodrigo"} fontFamily={"Nunito-Bold"}/>
        </SafeAreaView>
        <NewsAndOffersCarousel />
      </View>
    </FontLoader>
  );
}

function Points() {
  return (
    <FontLoader>
      <View style={styles.container}>
        <Text style={{...styles.text, fontFamily: 'Modak-Regular'}}>Points!</Text>
      </View>
    </FontLoader>
  );
}

function Menu() {
  return (
    <FontLoader>
      <View style={styles.container}>
        <Text style={{...styles.text, fontFamily: 'Modak-Regular'}}>Menú!</Text>
      </View>
    </FontLoader>
  );
}

function Perfil() {
  return (
    <FontLoader>
      <View style={styles.container}>
        <Text style={{...styles.text, fontFamily: 'Modak-Regular'}}>Perfil!</Text>
      </View>
    </FontLoader>
  );
}

const Tab = createBottomTabNavigator();

const AppLayout = () => {
  return (
    <NavigationContainer>
      <FontLoader>
        <Tab.Navigator 
        screenOptions={ ({ route }) => ({
          ...tabNavigatorStyles, 
          tabBarLabelStyle:{fontFamily: 'Modak-Regular'}, 
          headerTitleStyle:{fontFamily: 'Modak-Regular'},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Inicio') {
              iconName = focused ? require('../assets/INICIO.png') : require('../assets/INICIO.png');
            } else if (route.name === 'Points') {
              iconName = focused ? require('../assets/VASO2.png') : require('../assets/VASO2.png');
            } else if (route.name === 'Menú') {
              iconName = focused ? require('../assets/MENU.png') : require('../assets/MENU.png');
            } else if (route.name === 'Perfil') {
              iconName = focused ? require('../assets/PERFIL.png') : require('../assets/PERFIL.png');
            }
            return <Image source={iconName} style={{width: 25, height: 25}} />;
          }

        })}>
          
          <Tab.Screen name="Inicio" component={Inicio} options={headerOptions} />
          <Tab.Screen name="Points" component={Points} options={headerOptions} />
          <Tab.Screen name="Menú" component={Menu} options={headerOptions} />
          <Tab.Screen name="Perfil" component={Perfil} options={headerOptions} />
        </Tab.Navigator>
      </FontLoader>
    </NavigationContainer>
  );
};

export default AppLayout;