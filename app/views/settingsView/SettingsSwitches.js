import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Switch
} from 'react-native';

import SettingsSwitchesStyles from './styles/SettingsSwitchesStyles';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class PushSettings extends Component {
  constructor(props){
    super(props)
    this.state =  {
      isSwitchOn: true,
    }
  }

  switchFlip = (value) => {
    //object below store data to return to the parent object
    let obj = {
      location: this.props.notificationsTitle,
      value: value
    }
    this.props.response(obj)
    this.setState({isSwitchOn: value})
  }

  render(){
    return(
      <View style={SettingsSwitchesStyles.container}>
        <View style={SettingsSwitchesStyles.pushNoteTextContainer}>
          <Text style={SettingsSwitchesStyles.pushNoteText}>{this.props.notificationsTitle}</Text>
        </View>
        <View style={SettingsSwitchesStyles.switchButtonContainer}>
          <Switch style={SettingsSwitchesStyles.switchButton} value={this.state.isSwitchOn}
          onValueChange={(value) => this.switchFlip(value)}
          />
        </View>
      </View>
    )
  }
}
