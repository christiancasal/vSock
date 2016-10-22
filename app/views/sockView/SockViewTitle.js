import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import TabTitle from './../_main/TabTitle';
import MainTabbedStyles from './../_main/MainTabbedStyles'
import SockStyles from './styles/SockStyles'

export default class SockViewTitle extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <View style={MainTabbedStyles.container}>
        <TabTitle titleText='Your Door is...'/>
        <Text style={SockStyles.doorStatusText}>{this.props.doorStatus}</Text>
      </View>
    )
  }
}
