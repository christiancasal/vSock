import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';

import TabTitle from './../_main/TabTitle';
import MainTabbedStyles from './../_main/MainTabbedStyles'
import HomeStyles from './styles/HomeStyles'
import HomeViewTitle from './HomeViewTitle'

const doorOpen = require('./../../assets/images/doorOpen.png');
const doorClosed = require('./../../assets/images/doorClosed.png');
const cancelAlertMsg = 'Cancel';
const confirmAlertMsg = 'Yes!';

export default class Door extends Component {
  constructor(props){
    super(props)
    this.state = {
      doorSource: doorOpen,
      doorStatusText: 'open!',
      doorIsOpen: true
    }
  }

  doorSwitch = () => {
    if(this.state.doorIsOpen){
      console.log('close door');
      Alert.alert(
        'Privacy',
        'Put A Sock On?',
        [
          {text: cancelAlertMsg, onPress: () => this.openSesame() },
          {text: confirmAlertMsg, onPress: () => this.closeSesame() },
        ]
      )
    }
    else if(!this.state.doorIsOpen){
      console.log('open door');
      Alert.alert(
        'Privacy',
        'Are You Sure You Need To Get In?',
        [
          {text: cancelAlertMsg, onPress: () => this.closeSesame() },
          {text: confirmAlertMsg, onPress: () => this.openSesame() },
        ]
      )
    }
  }
  openSesame = () => {
    this.setState({
      doorSource: doorOpen,
      doorIsOpen: true,
      doorStatusText: 'open!'
    })
  }
  closeSesame = () => {
    this.setState({
      doorIsOpen: false,
      doorSource: doorClosed,
      doorStatusText: 'closed!'
    })
  }
  render(){
    return(
      <View>
        <HomeViewTitle doorStatusText={this.state.doorStatusText}/>
        <View style={HomeStyles.imageContainer}>
          <TouchableHighlight onPress={() => this.doorSwitch()} underlayColor='transparent'>
            <Image style={{maxWidth:250, maxHeight: 425}} source={this.state.doorSource}/>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
