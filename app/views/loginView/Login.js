import React, {Component} from 'react';

import {Text,
  View,
  TextInput
} from 'react-native';

export default class Login extends Component{
  constructor(props){
    super(props)
    this.state = {inputText: 'placeholder' }
  }
  render(){
    return (
      <View>
        <Text>This is for the User Login</Text>
        <TextInput
          style={{height: 40 , borderColor: 'gray', borderWidth: 1}}
          onChangeText={(inputText) => this.setState({inputText})}
          value={this.state.inputText}
          >

        </TextInput>
      </View>
    )
  }
}
