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

export default class Door extends Component {
  constructor(props){
    super(props)
    this.state = {
      doorSource: '',
      doorStatusText: 'open!',
      doorIsOpen: true
    }
  }

  componentWillMount(){
    this.setState({
      doorSource: doorOpen
    })
  }

  doorSwitch = () => {
    if(this.state.doorIsOpen){
      console.log('close door');
      Alert.alert(
        'Privacy',
        'Put A Sock On?',
        [
          {text: 'Cancel', onPress: () => this.setState({
                  doorIsOpen: true,
                  doorSource: doorOpen,
                  doorStatusText: 'open!'
          })},
          {text: 'Ok', onPress: () => this.setState({
            doorSource: doorClosed,
            doorIsOpen: false,
            doorStatusText: 'closed!'
          }) },
        ]
      )
    }

    else if(!this.state.doorIsOpen){
      console.log('open door');
      Alert.alert(
        'Privacy',
        'Are You Sure You Need To Get In?',
        [
          {text: 'Cancel', onPress: () => this.setState({
                  doorIsOpen: false,
                  doorSource: doorClosed,
                  doorStatusText: 'closed!'
          })},
          {text: 'Yes!', onPress: () => this.setState({
            doorSource: doorOpen,
            doorIsOpen: true,
            doorStatusText: 'open!'
          }) },
        ]
      )
    }
  }

  render(){
    return(
      <View>
      <HomeViewTitle doorStatusText={this.state.doorStatusText}/>
        <TouchableHighlight onPress={() => this.doorSwitch()} underlayColor='transparent'>
          <Image style={{maxWidth:250, maxHeight: 425}} source={this.state.doorSource}/>
        </TouchableHighlight>
      </View>
    )
  }
}
