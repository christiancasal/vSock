import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import ButtonStyles from './styles/ButtonStyles';

export default class SignInButton extends Component{
  constructor(props){
    super(props)

  }
  signInResponse = () => {
    let obj = {
      type: this.props.type,
    }
    this.props.response(obj);
  }
  render(){
    return(
      <View>
        <TouchableHighlight style={this.props.buttonStyle} onPress={() => this.signInResponse()}
        >
          <Text style={ButtonStyles.loginButtonText}>{this.props.buttonText}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
