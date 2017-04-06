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

            <Animated.Image source={require('./app/img/player.png')}
            style={{
                height: 100,
                width: 100,
                position: 'absolute',
                zIndex: 1,
                bottom: 150,
                resizeMode: 'stretch'
              }}></Animated.Image>

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
