import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableHighlight
} from 'react-native';

import InputStyles from '../styles/InputStyles';
import ButtonStyles from '../styles/ButtonStyles';

//initialize bcrypt
import bcrypt from 'react-native-bcrypt';
const salt = bcrypt.genSaltSync(10);

//initalize firebase
import * as firebase from 'firebase';

import firebase_keys from '../../../assets/keys'

const firebaseConfig = {
  apiKey: firebase_keys().apiKey,
  authDomain: firebase_keys().authDomain,
  databaseURL: firebase_keys().databaseURL,
  storageBucket: firebase_keys().storageBucket
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class UserHandling extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: 'Email',
      password:'Password',
    }
    this.itemsRef = firebaseApp.database().ref();
  }
  validate_email = (email) => {
    let emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailVal.test(email)
  }
  validate_password = (password) => {
    //minimum 8 characters. at least one letter, number, and special character
    let passwordVal = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    return passwordVal.test(password)
  }
  _userSignIn = () => {
    console.log('hello');
    //error checks
    let isEmailGood = this.validate_email(this.state.email)
    let isPasswordGood = this.validate_password(this.state.password)

    if(!isEmailGood){
      console.log('Invalid Email');
    }
    if(!isPasswordGood){
      console.log('Invalid Password');
    }
    if(isEmailGood && isPasswordGood){
      console.log('Valid Sign In');
      const hash = bcrypt.hashSync(this.state.password, salt)
      //store password
    }
  }

  focusNextField = (next) => {
    this.refs[next].focus();
  };

  render(){
    return(
      <View>
        <TextInput style={InputStyles.inputBox}
          placeholder={this.state.email}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({email})}
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('Password')}
        />
        <TextInput style={[InputStyles.inputBox, InputStyles.inputPW]}
          ref="Password"
          placeholder={this.state.password}
          onChangeText={(password) => this.setState({password})}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
        />

        <View style={ButtonStyles.createAcctContainer}>
          <TouchableHighlight
            style={ButtonStyles.signInButton}
            onPress={() => this._userSignIn()}
          >
            <Text>Sign In</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ButtonStyles.createAcctButton}>
            <Text>Create</Text>
          </TouchableHighlight>
        </View>

        <View style={ButtonStyles.forgotContainer}>
          <TouchableHighlight style={ButtonStyles.forgotButton}>
            <Text style={ButtonStyles.forgotButtonText}>Forgot?</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
