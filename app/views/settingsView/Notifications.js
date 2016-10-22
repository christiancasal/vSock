import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';

import PushSettings from './PushSettings';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class Notifications extends Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
      <View>
        <Text>Notifications</Text>
        <PushSettings />
      </View>
    )
  }
}
