import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native';

import TitleStyles from './TitleStyles';

export default class Title extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render(){
    return(
      <View style= {TitleStyles.container}>
        <Text style={TitleStyles.titletext}>{this.props.titleText}</Text>
      </View>
    )
  }
}
