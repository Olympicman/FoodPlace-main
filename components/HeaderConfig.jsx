// HeaderConfig.jsx

import React from 'react';
import { Image } from 'react-native';

export const headerOptions = {
 headerTitle: () => (
          <Image
            style={{ width: 200, height: 90, alignSelf: 'center' }}
            source={require('../assets/clientlogo.png')}
            resizeMode="contain" />
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          height: 60,
          backgroundColor: '#9DFF21',
        }
};