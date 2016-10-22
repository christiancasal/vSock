import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import MainTabbedStyles from './../_main/MainTabbedStyles'
import Door from './Door'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      //doorStatus true = door is open false = door is closed
    }
  }


  render(){
    return(
      <View style={MainTabbedStyles.container}>
        <Door />
      </View>
    )
  }
}
