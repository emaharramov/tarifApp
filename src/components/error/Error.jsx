import React from 'react';
import LottieView from 'lottie-react-native';
import { Button, View } from 'react-native';

const Error = () => {
  return(
  <View style={{flex:1}}>
    <LottieView style={{flex:1}} source={require('../../assets/error.json')} autoPlay />
  </View>)
};

export default Error;
