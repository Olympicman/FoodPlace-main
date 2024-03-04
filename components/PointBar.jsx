// PointBar.jsx
// No platform specific modifications in this file (verified)

// Purpose: This file contains the PointsProgressBar component which is used to display a progress bar based on the user's points.

// React and React Native modules
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

// Custom components
import FontLoader from './FontLoader';

const screenWidth = Dimensions.get('window').width;

const PointsProgressBar = ({
    points,
    user,
    fontFamily = 'Nunito-Regular', // Default font
    headerFontColor = '#000000', // Default color is black
    backgroundColor = '#f5f5f5', // Default background color
    progressBarColor = '#4caf50', // Default progress bar color
    progressBarBackgroundColor = '#e0e0e0', // Default progress bar background color
  }) => {
  
    // Calculate the width of the filler based on points (assuming max points is 10)
    const fillerWidthPercentage = (points / 10) * 100;
    // Calculate the actual width in pixels based on the screen width and padding
    const fillerWidth = ((screenWidth - 40) * fillerWidthPercentage) / 100;
    // Icon width (assuming the icon width is 24 pixels)
    const iconWidth = 24;
    // Calculate the left position of the icon so that it appears at the end of the filler
    // Adjust by subtracting half of the icon width to center it at the tip of the filler
    const iconPosition = fillerWidth - iconWidth / 2;

    return (
      <FontLoader>
      <View style={[styles.outerContainer, { backgroundColor }]}>
        <Text style={[styles.headerText, { fontFamily: fontFamily, color: headerFontColor }]}>
          Hola {user}, tienes {points} puntos!
        </Text>
        <View style={[styles.progressBarContainer, { backgroundColor: progressBarBackgroundColor }]}>
          <View style={[styles.progressBarFill, { width: fillerWidth, backgroundColor: progressBarColor }]} />
          <Image
            source={require('../assets/isotipo.png')}
            style={[styles.icon, { left: iconPosition-5 }]}
            resizeMode="cover"
          />
        </View>
      </View>
    </FontLoader>
    );
  };
  
  const styles = StyleSheet.create({
    outerContainer: {
      padding: 20,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center', // Changed to center to ensure vertical alignment
      width: screenWidth - 40, // Adjust based on your padding and desired total width
      minHeight: 100, // Optional: adjust based on your content
    },
    headerText: {
      fontSize: 16,
      color: "#000000", // Ensure this color is defined or removed
      marginBottom: 10,
    },
    progressBarContainer: {
      flexDirection: 'row', // Added to ensure the filler and icon align correctly
      height: 30,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative', // Ensure this is here for absolute positioning of the icon
    },
    progressBarFill: {
      height: '100%',
      borderRadius: 0,
    },
    icon: {
      position: 'absolute',
      width: 30, // Define the icon size
      height: 30, // Ensure this matches the width for a square icon, adjust as needed
      top: 0, // Adjust this value based on the icon's size and desired position
    },
  });
  

export default PointsProgressBar;