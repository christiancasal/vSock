import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import Start from './app/components/views/Start'

class virtualSock extends Component {

  _renderScene(route, navigator){
    if(route.index === 'Start'){
      return(<Start navigator={navigator} />)
    }
  }

  render() {

    return (
      <Navigator
        initialRoute={{index: 'Start'}}
        renderScene={this._renderScene.bind(this)}
      />
    );
  }
}


AppRegistry.registerComponent('virtualSock', () => virtualSock);
