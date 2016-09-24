import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

//controller components
import Login from '../../controllers/Login';

//view components
import LoginViewStyles from './LoginViewStyles';
import ButtonStyles from './ButtonStyles';

export default class LoginView extends Component {
  render(){
    return(
      <View style={LoginViewStyles.container}>
        <Login />
      </View>
    )
  }
}
