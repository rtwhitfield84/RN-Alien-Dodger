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

  constructor(props) {
    super(props);
    this.state = {
      movePlayerVal: new Animated.Value(40),
      playerSide: 'left',
    };
  }
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
                resizeMode: 'stretch',
                transform: [
                  { translateX: this.state.movePlayerVal }
                ]
              }}></Animated.Image>

              <View style={styles.controls}>
                <Text style={styles.left}> {'<'} </Text>
                <Text style={styles.right}> {'>'} </Text>
              </View>

        </Image>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    resizeMode: 'cover'
  },
  controls: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    color: '#fff',
    margin: 0,
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  left: {
    flex: 1,
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'right'
  }
});

AppRegistry.registerComponent('game', () => game);
