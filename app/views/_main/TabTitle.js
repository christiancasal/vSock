import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native';

import TabTitleStyles from './TabTitleStyles';

export default class Title extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    return(
      <View style={TabTitleStyles.container}>
        <Text style={TabTitleStyles.titletext}>{this.props.titleText}{this.props.doorStatusText}</Text>
      </View>
    )
  }
}
