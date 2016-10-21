import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class SockViewTitle extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <View style={{top: -225}}>
        <Text>The Door is...{this.props.doorStatus}</Text>
      </View>
    )
  }
}
