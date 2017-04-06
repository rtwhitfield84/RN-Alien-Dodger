import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image
} from 'react-native';

export default class game extends Component {
  render() {
    return (
        <Image source={require('./app/img/bg.png')} style={styles.container}>

        </Image>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover'
  }
});

AppRegistry.registerComponent('game', () => game);
