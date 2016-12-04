import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  toggleContact = () => {
    console.log("this is toggle contact");
  }
  render(){
    let {name, numberType, numberString, numberValue} = this.props;
    return(
      <View>
        <TouchableHighlight onPress={() => this.toggleContact()}>
          <View>
            <Text>{name}</Text>
            <Text>{numberType} {numberString}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
