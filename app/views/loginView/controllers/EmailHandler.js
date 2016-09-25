import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';

import InputStyles from '../styles/InputStyles'

export default class EmailHandler extends Component{
  constructor(props){
    super(props);
    this.state = {
      emailStore: 'Email',
      pwStore:'Password'
    }
  }
  focusNextField = (next) => {
    this.refs[next].focus();
  };

  render(){
    return(
      <View>
        <TextInput style={InputStyles.inputBox}
          placeholder={this.state.emailStore}
          keyboardType="email-address"
          onChangeText={(emailStore) => this.setState({emailStore})}
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={() => this.focusNextField('Password')}
        />
        <TextInput style={[InputStyles.inputBox, InputStyles.inputPW]}
          ref="Password"
          placeholder={this.state.pwStore}
          onChangeText={(pwStore) => this.setState({pwStore})}
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </View>
    )
  }
}
