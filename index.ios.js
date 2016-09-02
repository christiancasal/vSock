import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import {createStore} from 'redux'
let store = createStore(todos, ['Use Redux'])

import Start from './app/components/views/Start'

class virtualSock extends Component {

  _todos(state = [], action){
    switch(action.type){
      case 'START':
        return state.concat([action.text])
      default:
        return state
    }
  }

  store.dispatch({
    type:'START',

  })


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
