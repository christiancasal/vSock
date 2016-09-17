import React, {Component} from 'react';

import {Text,
  View,
  TextInput
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';


export default class Login extends Component{
  constructor(props){
    super(props)
    this.state = {inputText: 'placeholder' }
  }
  render(){
    return (
      <FBLogin />
    )
  }
}
