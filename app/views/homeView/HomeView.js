import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import MainTabbedStyles from './../_main/MainTabbedStyles'
import Door from './Door'
import TabTitle from './../_main/TabTitle';

export default class HomeView extends Component {
  constructor(props){
    super(props)
    this.state = {
      //doorStatus true = door is open false = door is closed
    }
  }


  render(){
    return(
      <View style={MainTabbedStyles.container}>
        <View style={MainTabbedStyles.titleContainer}>
          <TabTitle titleText='Door '/>
        </View>
        <Door />
      </View>
    )
  }
}
