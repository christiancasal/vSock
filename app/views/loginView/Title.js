import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native';

import TitleStyles from './styles/TitleStyles'

export default class Title extends Component {
  render(){
    return(
      <View style= {TitleStyles.container}>
        <Text style={TitleStyles.titletext}>Virtual Sock</Text>
      </View>
    )
  }
}
