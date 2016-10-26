import React , { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import LogoutButtonStyles from './styles/LogoutButtonStyles';

export default class SettingsButton extends Component {
  constructor(props){
    super(props)
      this.state = {

      }
  }
  buttonResponse = () => {
    let obj = {
      type: this.props.type
    }
    this.props.response(obj)
  }
  render(){
    return(
      <View>
        <TouchableHighlight style={this.props.buttonStyle} onPress={() => this.buttonResponse()}>
          <Text style={this.props.textStyle}>{this.props.buttonText}</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
