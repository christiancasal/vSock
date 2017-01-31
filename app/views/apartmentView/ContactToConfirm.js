import React, { Component } from 'react';
import {View, Text} from 'react-native';

import ContactStyles from './styles/ContactStyles';
import ApartmentViewStyles from './styles/ApartmentViewStyles';

export default class ClassName extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render(){
    let { contactName, contactNumber } = this.props;
    let {nameText, phoneText, contactContainer} = ContactStyles;
    return(
      <View style={ApartmentViewStyles.ctToConfContainer}>
        <Text style={nameText}>{contactName} @{contactNumber}</Text>
      </View>
    )
  }
}
