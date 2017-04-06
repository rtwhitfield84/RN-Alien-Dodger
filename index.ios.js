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
                <Text style={styles.left} onPress={ () => this.movePlayer('left') }> {'<'} </Text>
                <Text style={styles.right} onPress={ () => this.movePlayer('right') }> {'>'} </Text>
              </View>

        </Image>

    );
  }

  movePlayer(direction) {

    if (direction == 'right') {
      this.setState({ playerSide: 'right' });

      Animated.spring(
        this.state.movePlayerVal,
          {
            toValue: Dimensions.get('window').width - 140,
            tension: 120,
          }
        ).start();
    } else if (direction == 'left') {

      this.setState({ playerSide: 'left' });


      Animated.spring(
        this.state.movePlayerVal,
          {
            toValue: 40,
            tension: 120,
          }
        ).start();

    }

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
    color: '#000',
    margin: 0,
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  left: {
    flex: 1,
    color: '#000',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'right'
  }
});

AppRegistry.registerComponent('game', () => game);
