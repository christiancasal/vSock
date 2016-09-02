import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

export default class Log extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <Text>This is the logView</Text>
    )
  }
}
