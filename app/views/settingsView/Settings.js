import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';

import MainTabbedStyles from './../_main/MainTabbedStyles'
import TabTitle from './../_main/TabTitle';

import Notifications from './Notifications'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class Settings extends Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
      <View style={MainTabbedStyles.container}>
        <TabTitle titleText='Settings'/>
        <Notifications />
      </View>
    )
  }
}
