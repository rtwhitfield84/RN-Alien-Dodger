import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Animated,
  Image
} from 'react-native';

export default class Enemy extends Component {

  render() {
    return (
            <Animated.Image source={require('./app/img/player.png')}
            style={{
                height: 100,
                width: 100,
                position: 'absolute',
                resizeMode: 'stretch',
                left: this.props.enemyStartposX,
                transform: [
                  { translateY: this.state.moveEnemyval },
                ]
              }}></Animated.Image>

    );
  }