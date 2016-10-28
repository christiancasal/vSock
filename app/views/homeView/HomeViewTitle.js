import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import TabTitle from './../_main/TabTitle';
import MainTabbedStyles from './../_main/MainTabbedStyles';

export default class HomeViewTitle extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <View style={MainTabbedStyles.titleContainer}>
        <TabTitle titleText='Door ' doorStatusText={this.props.doorStatusText}/>
      </View>
    )
  }
}
