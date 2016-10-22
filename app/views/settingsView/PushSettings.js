import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class PushSettings extends Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
      <View>
        <Text>Push Settings</Text>
      </View>
    )
  }
}
