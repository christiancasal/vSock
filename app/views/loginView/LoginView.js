import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import LoginViewStyles from './styles/LoginViewStyles';

//controller components
import UserHandling from './controllers/UserHandling'

export default class LoginView extends Component {
  render(){
    return(
      <View style={LoginViewStyles.container}>
        <UserHandling />
      </View>
    )
  }
}
