import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class game extends Component {
  render() {
    return (
        <Text>
          Hello!
        </Text>

    );
  }
}

AppRegistry.registerComponent('game', () => game);
