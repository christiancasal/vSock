import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
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
      doorIsOpen: false
    }
  }

  componentWillMount(){
    this.setState({
      doorSource: doorOpen
    })
  }

  doorSwitch = () => {
    this.setState({
      doorIsOpen: !this.state.doorIsOpen
    })
    if(this.state.doorIsOpen){
      this.setState({
        doorSource: doorOpen,
        doorStatusText: 'open!'
      })
    }
    else{
      this.setState({
        doorSource: doorClosed,
        doorStatusText: 'closed!'
      })
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
