import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import MainTabbedStyles from './../MainTabbedStyles'

export default class Apartment extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <View style={MainTabbedStyles.container}>
        <Text>This is the aptView</Text>
      </View>
    )
  }
}
