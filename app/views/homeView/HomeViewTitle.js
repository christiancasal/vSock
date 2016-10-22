import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import TabTitle from './../_main/TabTitle';
import MainTabbedStyles from './../_main/MainTabbedStyles'
import HomeStyles from './styles/HomeStyles'

export default class HomeViewTitle extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <View>
        <TabTitle titleText='Your Door is...'/>
        <Text style={HomeStyles.doorStatusText}>{this.props.doorStatusText}</Text>
      </View>
    )
  }
}
