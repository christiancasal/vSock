import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import MainTabbedStyles from './../_main/MainTabbedStyles'
import TabTitle from './../_main/TabTitle';

export default class Settings extends Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
      <View style={MainTabbedStyles.container}>
        <TabTitle titleText='Settings'/>
      </View>
    )
  }
}
