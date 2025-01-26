import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

const Loading = () => {
  return (
    <View style={{flex: 1}}>
      <LottieView
        style={{flex: 1}}
        source={require('../../assets/loading.json')}
        autoPlay
      />
    </View>
  );
};

export default Loading;
