import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Alert
} from 'react-native';

import MainTabbedStyles from './../_main/MainTabbedStyles';
import TabTitle from './../_main/TabTitle';
import SettingsButton from './SettingsButton';
import SettingsSwitches from './SettingsSwitches';
import SettingsViewStyles from './styles/SettingsViewStyles';
import LogoutButtonStyles from './styles/LogoutButtonStyles';
import DeleteButtonStyles from './styles/DeleteButtonStyles';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class SettingsView extends Component {
  constructor(props){
    super(props)

  }

  pushResponse = (ref) => {
    console.log('this is the escape for PushSettings');
    console.log(ref);
    //TODO:add logic
  }
  logoutAllAccts = (ref) => {
    console.log('this is logOutAllAccts');
    console.log(ref);
    //TODO:add an alert
  }
  deleteUserAcct = (ref) => {
    console.log('this is deleteUserAcct');
    console.log(ref);
    //TODO:add an alert
  }

  render(){
    return(
      <View style={MainTabbedStyles.container}>
        <View style={MainTabbedStyles.titleContainer}>
          <TabTitle titleText='Settings'/>
        </View>
        <SettingsSwitches notificationsTitle='Push Notifications' response={(ref) => this.pushResponse(ref)}/>
        <SettingsButton
          buttonStyle={LogoutButtonStyles.logoutButton}
          textStyle={LogoutButtonStyles.logoutButtonText}
          buttonText='Logout All Accounts'
          type='Logout'
          response={(ref) => this.logoutAllAccts(ref)}
        />
        <SettingsButton
          buttonStyle={DeleteButtonStyles.deleteButton}
          textStyle={DeleteButtonStyles.deleteButtonText}
          buttonText='Delete Account'
          type='Delete'
          response={(ref) => this.deleteUserAcct(ref)}
        />
      </View>
    )
  }
}
