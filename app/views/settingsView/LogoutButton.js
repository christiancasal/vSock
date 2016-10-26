import React , { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import LogoutButtonStyles from './styles/LogoutButtonStyles';

export default class LogoutButton extends Component {
  constructor(props){
    super(props)
      this.state = {

      }
  }
  logOutAllAccts = () => {
    console.log('this is logOutAllAccts');
  }
  render(){
    return(
      <View>
        <TouchableHighlight style={LogoutButtonStyles.logoutButton} onPress={() => this.logOutAllAccts()}>
          <Text style={LogoutButtonStyles.logoutButtonText}>Logout All Accounts</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
