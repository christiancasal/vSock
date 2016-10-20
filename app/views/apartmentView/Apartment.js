import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

export default class Apartment extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <View style={{height: 100,backgroundColor: 'red'}}>
        <Text>This is the aptView</Text>
      </View>
    )
  }
}
