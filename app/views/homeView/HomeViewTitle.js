import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import TabTitle from './../_main/TabTitle';

export default class HomeViewTitle extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <View>
        <TabTitle titleText='Your Door is...' doorStatusText={this.props.doorStatusText}/>
      </View>
    )
  }
}
