import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableHighlight
} from 'react-native';

import InputStyles from '../styles/InputStyles';
import ButtonStyles from '../styles/ButtonStyles';

//view components
import LoginViewStyles from './../styles/LoginViewStyles';

import Title from './../Title';
import Welcome from './../../welcomeView/Welcome';

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
      loggedIn: '',
      showEmail: true,
      showPassword: true,
      showSignIn: true,
      showCreateAcct: true,
    }
    this.itemsRef = firebaseApp.database().ref();
  }
  componentWillMount(){
    console.log('Component Will Mount!');

    let userLogInStatus = this.verifyUser();
    this.setState({loggedIn: false});

  }
  verifyUser = () => {
    let user = firebaseApp.auth().currentUser;
    if(!user){
      return user;
    }
    return user.emailVerified;
  }
  //NOTE: email validation is now done by firebase
  // validate_email = (email) => {
  //   let emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return emailVal.test(email)
  // }
  validate_password = (password) => {
    //minimum 8 characters. at least one letter, number, and special character
    let passwordVal = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    return passwordVal.test(password)
  }
  createAccount = () => {
    console.log('this is create account');
    let { email , password } = this.state;
    console.log(email);
    firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(error);
    }).then(() => {
      //TODO: bug here
      this.verifyEmail();
    })
  }
  verifyEmail = () => {
    console.log('this is verify email');
    let user = firebaseApp.auth().currentUser;

    if(!user.emailVerified){
      user.sendEmailVerification().then(function(){
        //Email sent
      }, function(error){
        console.log(error);
      });
    } else {
      return user.emailVerified;
    }
  }
  resetPassword = (email) => {
    this.setState({showPassword: false });
    let auth = firebaseApp.auth();
    return;
    // auth.sendPasswordResetEmail(email).then(function() {
    //   // Email sent.
    // }, function(error) {
    //   // An error happened.
    // });
  }
  userSignIn = () => {
    console.log('userSignIn');
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
      // const hash = bcrypt.hashSync(this.state.password, salt)
      //store password
    }
  }
  focusNextField = (next) => {
    this.refs[next].focus();
  };
  //functions for displaying components
  displayEmailInput = (email, showEmail) => {
    if(showEmail){
      return <TextInput style={InputStyles.inputBox}
        placeholder={email}
        keyboardType="email-address"
        onChangeText={(email) => this.setState({email})}
        autoCorrect={false}
        autoCapitalize="none"
        onSubmitEditing={() => this.focusNextField('Password')}
        />
    }
  }
  displayPasswordInput = (password, showPassword) => {
    if(showPassword){
      return <TextInput style={[InputStyles.inputBox, InputStyles.inputPW]}
        ref="Password"
        placeholder={password}
        onChangeText={(password) => this.setState({password})}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={true}
        />
    }
    else {
       return <Text>Please enter your e-mail</Text>
    }
  }
  displaySignInButton = (showSignIn) => {
    if(showSignIn){
      return <TouchableHighlight style={ButtonStyles.signInButton}
          onPress={() => this.userSignIn()}>
          <Text>Sign In</Text>
      </TouchableHighlight>
    }
  }
  displayCreateAcctButton = (showCreateAcct) => {
    if(showCreateAcct){
      return <TouchableHighlight style={ButtonStyles.createAcctButton} onPress={() => this.createAccount()}>
        <Text>Create</Text>
      </TouchableHighlight>
    }
  }
  displayForgotPasswordButton = (email, showPassword) => {
    if (showPassword){
      return  <View style={ButtonStyles.forgotContainer}>
                <TouchableHighlight style={ButtonStyles.forgotButton} onPress={() => this.resetPassword(email)}>
                  <Text style={ButtonStyles.forgotButtonText}>Forgot?</Text>
                </TouchableHighlight>
              </View>
      }
  }
  render(){
    // debugger;
    let {email, password, loggedIn, showPassword, showEmail, showSignIn, showCreateAcct } = this.state;

    let emailInput, passwordInput, createAcct, signIn, forgotPassword  = null;

    emailInput = this.displayEmailInput(email, showEmail);
    passwordInput = this.displayPasswordInput(password, showPassword);
    signIn = this.displaySignInButton(showSignIn)
    createAcct = this.displayCreateAcctButton(showCreateAcct);
    forgotPassword = this.displayForgotPasswordButton(email, showPassword)

    if(!loggedIn){
      return(
        <View style={LoginViewStyles.container}>
          <Title />
            {emailInput}
            {passwordInput}
            <View style={ButtonStyles.createAcctContainer}>
              {signIn}
              {createAcct}
            </View>
            {forgotPassword}
        </View>
      )
    } else {
        return( <Welcome /> )
    }
  }
}
