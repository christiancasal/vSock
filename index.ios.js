import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

// import {createStore} from 'redux'
// let store = createStore(todos, ['Use Redux'])

// import Start from './app/views/Start'
import LoginView from './app/views/loginView/LoginView'

class virtualSock extends Component {
  
  _renderScene(route, navigator){
    if(route.index === 'LoginView'){
      return(<LoginView navigator={navigator} />)
    }
  }

  render() {

    return (
      <Navigator
        initialRoute={{index: 'LoginView'}}
        renderScene={this._renderScene.bind(this)}
      />
    );
  }

}


AppRegistry.registerComponent('virtualSock', () => virtualSock);
