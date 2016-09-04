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
import Login from './app/views/loginView/Login'

class virtualSock extends Component {

  // _todos(state = [], action){
  //   switch(action.type){
  //     case 'START':
  //       return state.concat([action.text])
  //     default:
  //       return state
  //   }
  // }
  //
  // store.dispatch({
  //   type:'START',
  //
  // })


  _renderScene(route, navigator){
    if(route.index === 'Login'){
      return(<Login navigator={navigator} />)
    }
  }

  render() {

    return (
      <Navigator
        initialRoute={{index: 'Login'}}
        renderScene={this._renderScene.bind(this)}
      />
    );
  }

}


AppRegistry.registerComponent('virtualSock', () => virtualSock);
