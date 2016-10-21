import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import MainTabbedStyles from './../MainTabbedStyles'
import SockViewTitle from './SockViewTitle'

export default class Sock extends Component {
  constructor(props){
    super(props)
    this.state = {
      doorStatus: 'open!'
    }
  }


  render(){
    return(
      <View style={MainTabbedStyles.container}>
        <SockViewTitle doorStatus={this.state.doorStatus}/>
        <Text>This is the sockView</Text>
      </View>
    )
  }
}
