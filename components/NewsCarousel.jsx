// NewsCarousel.jsx
// No platform specific modifications in this file (verified)

// Purpose: This file contains the NewsAndOffersCarousel component which is used to 
// display news and offers in a carousel.

// React and React Native modules
import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const data = [
  { title: "Inserte Imagen acá", description: "O inserte texto" },
  { title: "Inserte Contenido acá", description: "Inserte Contenido acá" },
  // Add more items here
];

const renderItem = ({item, index}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

const NewsAndOffersCarousel = () => {
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth} // Use the full screen width for the slider
      itemWidth={screenWidth - 60} // Subtract some value to make the item narrower than the screen width
      contentContainerCustomStyle={styles.carouselContentContainer}
      activeSlideAlignment={'center'} // Ensure the active item is always centered
      inactiveSlideScale={0.94} // Optionally scale down inactive slides
      inactiveSlideOpacity={0.7} // Optionally reduce opacity of inactive slides
    />
  );
};

const styles = StyleSheet.create({
  carouselContentContainer: {
    paddingVertical: 10, // Add vertical padding
  },
  itemContainer: {
    width: screenWidth - 60, // This should match itemWidth in Carousel
    height: 200, // Adjust the height as needed
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // Add shadow or other styling as needed
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Add more styles as needed
});

export default NewsAndOffersCarousel;