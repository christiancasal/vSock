import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Settings extends Component {
  constructor(props){
    super(props)

  }


  render(){
    return(
      <View style={{height: 100,backgroundColor: 'red'}}>
        <Text>This is the settingsView</Text>
      </View>
    )
  }
}
