import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableHighlight
} from 'react-native';

import InputStyles from '../styles/InputStyles';
import ButtonStyles from '../styles/ButtonStyles';

export default class EmailHandler extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: 'Email',
      password:'Password',
    }
  }
  validate_email = (email) => {
    let emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return emailVal.test(email)

  }
  _userSignIn = () => {
    console.log('hello');
    if(!this.validate_email(this.state.email)){
      console.log('not valid');
    }
    else {
      console.log('valid email');
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
