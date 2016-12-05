import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Switch
} from 'react-native';

import ContactStyles from './styles/ContactStyles';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSwitchOn: false,
    }
  }
  toggleContact = () => {
    console.log("this is toggle contact");
    console.log(this.state.isSwitchOn);
    this.setState({
      isSwitchOn: !this.state.isSwitchOn,
    })
  }
  switchFlip = (value) => {
    console.log("this is switch flip");
    console.log(value);
    //TODO: if its true send to staging area, if its false, check the staging area to see if the entry exists if so remove
  }
  render(){
    let {name, numberType, numberString, numberValue} = this.props;
    return(
      <View>
        <TouchableHighlight onPress={() => this.toggleContact()} style={ContactStyles.container}>
          <View style={ContactStyles.contactContainer}>
            <View style={ContactStyles.contactItems}>
              <Text style={ContactStyles.nameText}>{name}</Text>
              <Text style={ContactStyles.phoneText}>{numberString}</Text>
              <Text style={ContactStyles.labelText}>{numberType}</Text>
            </View>
            <View style={ContactStyles.contactSwitch}>
              <Switch value={this.state.isSwitchOn}
                onValueChange={(value) => this.switchFlip(value)}
                disabled={true}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
