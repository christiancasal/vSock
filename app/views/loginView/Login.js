import React, {Component} from 'react';

import {Text,
  View,
  TextInput
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class Login extends Component{
  constructor(props){
    super(props)
    this.state = {inputText: 'placeholder' }
  }

  render(){
    return (
      <View>
        <FBLogin />
        <GoogleSigninButton
          style={{width: 48, height: 48}}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          />
      </View>
    )
  }
}
