import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';


//view components
import LoginViewStyles from './styles/LoginViewStyles';
import Title from './Title';

//controller components
import Login from './controllers/Login';
import EmailHandler from './controllers/EmailHandler'

export default class LoginView extends Component {
  render(){
    return(
      <View style={LoginViewStyles.container}>
        <Title />
        <EmailHandler />
        <Login />
      </View>
    )
  }
}
