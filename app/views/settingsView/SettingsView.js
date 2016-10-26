import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';

import MainTabbedStyles from './../_main/MainTabbedStyles';
import TabTitle from './../_main/TabTitle';
import LogoutButton from './LogoutButton';
import SettingsSwitches from './SettingsSwitches';
import SettingsViewStyles from './styles/SettingsViewStyles';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class SettingsView extends Component {
  constructor(props){
    super(props)

  }

  pushResponse = (ref) => {
    console.log('this is the escape for PushSettings');
    console.log(ref);
  }

  render(){
    return(
      <View style={MainTabbedStyles.container}>
        <View style={MainTabbedStyles.settingsTitleContainer}>
          <TabTitle titleText='Settings'/>
        </View>
        <SettingsSwitches notificationsTitle='Push Notifications' response={(ref) => this.pushResponse(ref)}/>
        <LogoutButton />
      </View>
    )
  }
}
