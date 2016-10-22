import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  Alert
} from 'react-native';

import InputStyles from '../styles/InputStyles';
import ButtonStyles from '../styles/ButtonStyles';
import LoginViewStyles from './../styles/LoginViewStyles';

import { FBLoginManager } from 'react-native-facebook-login';
import { GoogleSignin } from 'react-native-google-signin';


import Title from '../../_main/Title';
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
      //uncommented for testing - moves to welcomeView
      // user: null,
      // loggedIn: '',
      showEmail: false,
      showPassword: false,
      showSignIn: false,
      showCreateAcct: false,
      showFacebook: true,
      showGoogle: true,
      showEmailButton: true,
      showForgotPW: false,
      confirmForgotPW: false,
      forgotPWText: 'Forgot Password?',
      validEmail: false,
      validEmailText: '',
      user: true,
      loggedIn: true,
    }
    this.itemsRef = firebaseApp.database().ref();
  }
  componentWillMount(){
    console.log('Component Will Mount!');

    //uncommented below for testing
    // let userLogInStatus = this.verifyUser();
    // this.setState({loggedIn: false});

  }
  componentDidMount(){
    this._setupGoogleSignin();
  }
  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        // scopes: ["https://www.googleapis.com/auth/drive.readonly"],
        iosClientId: '57555418851-vqbbma9aqlkkbtsn92alf6qm6rubq93j.apps.googleusercontent.com',
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
    }
    catch(err) {
      console.log("Google signin error", err.code, err.message);
    }
  }
  verifyUser = () => {
    let user = firebaseApp.auth().currentUser;
    if(!user){
      return user;
    }
    return user.emailVerified;
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
  //NOTE: email validation is now done by firebase
  validate_email = (email) => {
    let emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(emailVal.test(email)){
       this.setState({
         email: email,
         validEmail: true,
         validEmailText: 'Email is valid!'
       })
     }
     else{
       this.setState({
         email: email,
         validEmail:false,
         validEmailText: 'Email is not valid!'
       })
     }
  }

  validate_password = (password) => {
    //minimum 8 characters. at least one letter, number, and special character
    let passwordVal = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    return passwordVal.test(password)
  }

  setUpResetPassword = () => {
    this.setState({
      showEmail: true,
      showPassword: false,
      showSignIn: false,
      showCreateAcct: false,
      showFacebook: false,
      showGoogle: false,
      showEmailButton: false,
      showForgotPW: true,
      confirmForgotPW: true,
      forgotPWText: 'Password Reset'
    })
    console.log('this is reset password');
    return;
  }
  confirmResetPassword = () => {
    console.log('this is confirm reset password');
      if(this.state.validEmail){
        let auth = firebaseApp.auth();

        auth.sendPasswordResetEmail(email).then(function() {
          // Email sent.
        }, function(error) {
          // An error happened.
        });

        this.setState({
          confirmForgotPW: false,
        });

        Alert.alert('Email Sent!');
        this.signInEmail()
    }
  }
  signInFacebook = () => {
    console.log('this is signin with Facebook');
    FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.Native)

    // FBLoginManager.loginWithPermissions(["email","user_friends"], (error, data) => {
    //   if (!error) {
    //     console.log("Login data: ", data);
    //     this.setState({user: data.credentials})
    //     console.log(data.credentials);
    //   } else {
    //     console.log("Error: ", error);
    //   }
    // })

    FBLoginManager.logout((error, data) => {
      if (!error) {
        console.log("Logout data: ", data);
        this.setState({user: null});
      } else {
        console.log("Error: ", error);
      }
    })
  }
  signOutFacebook = () => {
    console.log('this is signin with Facebook');

    FBLoginManager.logout((error, data) => {
      if (!error) {
        console.log("Logout data: ", data);
        this.setState({user: null});
      } else {
        console.log("Error: ", error);
      }
    })

  }
  signInGoogle = () => {
    GoogleSignin.signIn().then((user) => {
      console.log(user);
      this.setState({user: user});
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }
  signOutGoogle() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null});
    })
    .done();
  }
  signInEmail = () => {
    console.log('this is signin with Email');

    let { showEmail, showPassword, showSignIn, showCreateAcct, showFacebook, showGoogle, showEmailButton, showForgotPW } = this.state;

    this.setState({
      showEmail: true,
      showPassword: true,
      showSignIn: true,
      showCreateAcct: true,
      showFacebook: false,
      showGoogle: false,
      showEmailButton: false,
      showForgotPW: true,
      forgotPWText: 'Forgot Password?'
    })
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
      return <View>
        <TextInput style={[InputStyles.inputBox, InputStyles.inputEmail]}
          placeholder={email}
          keyboardType="email-address"
          onChangeText={(email) => this.validate_email(email)}
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('Password')}
        />
        <Text style={InputStyles.inputEmailTextCheck}>{this.state.validEmailText}</Text>
      </View>
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
  }
  displaySignInButton = (showSignIn) => {
    if(showSignIn){
      return <TouchableHighlight style={ButtonStyles.signInButton}
          onPress={() => this.userSignIn()}>
          <Text style={ButtonStyles.loginButtonText}>Sign In</Text>
      </TouchableHighlight>
    }
  }
  displayCreateAcctButton = (showCreateAcct) => {
    if(showCreateAcct){
      return <TouchableHighlight style={ButtonStyles.createAcctButton} onPress={() => this.createAccount()}>
        <Text style={ButtonStyles.loginButtonText}>Create</Text>
      </TouchableHighlight>
    }
  }
  displayForgotPasswordButton = (showForgotPW, confirmForgotPW) => {
    if(showForgotPW && !confirmForgotPW){
      return  <View style={ButtonStyles.forgotContainer}>
                <TouchableHighlight style={ButtonStyles.forgotButton} onPress={() => this.setUpResetPassword()}>
                  <Text style={ButtonStyles.forgotButtonText}>{this.state.forgotPWText}</Text>
                </TouchableHighlight>
              </View>
      }
    if(showForgotPW && confirmForgotPW) {
      return <View style={ButtonStyles.forgotContainer}>
                <TouchableHighlight style={ButtonStyles.forgotButton} onPress={() => this.confirmResetPassword()}>
                  <Text style={ButtonStyles.forgotButtonText}>{this.state.forgotPWText}</Text>
                </TouchableHighlight>
              </View>
    }
  }
  displayFacebookButton = (showFacebook) => {
    if(showFacebook){
      return <View>
              <TouchableHighlight style={ButtonStyles.loginFBButton} onPress={() => this.signInFacebook()}
              >
                <Text style={ButtonStyles.loginButtonText}>Continue with Facebook</Text>
              </TouchableHighlight>
             </View>
    }
  }
  displayGoogleButton = (showGoogle) => {
    if(showGoogle){
      return <View>
              <TouchableHighlight style={ButtonStyles.loginGOOGButton} onPress={() => this.signInGoogle()}>
                <Text style={ButtonStyles.loginButtonText}> Sign in with Google</Text>
              </TouchableHighlight>
             </View>
    }
  }
  displayEmailButton = (showEmailButton) => {
    if(showEmailButton){
      return <View>
              <TouchableHighlight style={ButtonStyles.loginEmailButton} onPress={() => this.signInEmail()}>
                <Text style={ButtonStyles.loginButtonText}> Sign in with Email</Text>
              </TouchableHighlight>
             </View>
    }
  }

  render(){
    // debugger;
    let { email, password, loggedIn, showPassword, showEmail, showSignIn, showCreateAcct, showFacebook, showGoogle, showEmailButton, showForgotPW, confirmForgotPW, user } = this.state;

    let emailInput, passwordInput, createAcct, signIn, forgotPassword, facebookButton, googleButton, emailButton  = null;

    emailInput = this.displayEmailInput(email, showEmail);
    passwordInput = this.displayPasswordInput(password, showPassword);
    signIn = this.displaySignInButton(showSignIn)
    createAcct = this.displayCreateAcctButton(showCreateAcct);
    forgotPassword = this.displayForgotPasswordButton(showForgotPW, confirmForgotPW)
    facebookButton = this.displayFacebookButton(showFacebook);
    googleButton = this.displayGoogleButton(showGoogle);
    emailButton = this.displayEmailButton(showEmailButton)

    if(!loggedIn && !user){
      return(
        <View style={LoginViewStyles.container}>
          <Title titleText='Virtual Sock'/>
            <View >
              {emailInput}
              {passwordInput}
            </View>
            <View style={ButtonStyles.createAcctContainer}>
              {signIn}
              {createAcct}
            </View>
            <View>
              {forgotPassword}
            </View>
            <View>
              {facebookButton}
              {googleButton}
              {emailButton}
            </View>
        </View>
      )
    } else {
        return( <Welcome title0='Apartment' title1='Sock' title2='Settings' /> )
    }
  }
}
