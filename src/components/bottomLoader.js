import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const BottomLoader = ({isLoading}) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateProgress = () => {
      Animated.loop(
        Animated.timing(progress, {
          toValue: 100,
          duration: 2000, // Adjust the duration as needed
          useNativeDriver: true,
        }),
      ).start();
    };

    if (isLoading) {
      animateProgress();
    } else {
      progress.setValue(0); // Reset the animation if isLoading is false
    }
  }, [isLoading, progress]);

  const interpolatedProgress = progress.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  if (!isLoading) {
    return null; // Render nothing if isLoading is false
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <View style={styles.loaderBackground}>
          <Animated.View
            style={[
              styles.loaderFill,
              {transform: [{scaleX: interpolatedProgress}]},
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '1%',
  },
  loaderBackground: {
    backgroundColor: 'lightgrey',
    height: 4,
    width: '95%',
    borderRadius: 2,
    overflow: 'hidden', // Ensure the overflow is hidden for the scaleX animation
  },
  loaderFill: {
    backgroundColor: 'black',
    height: '100%',
    borderRadius: 2,
  },
});

export default BottomLoader;
