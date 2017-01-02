import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Switch,
  AsyncStorage
} from 'react-native';


import ContactStyles from './styles/ContactStyles';
import realm from './../../assets/store/index';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      contact: '',
      isSwitchOn: false,
    }
  }
  componentDidUpdate(){
    this.checkStatus()

  }
  componentDidMount(){

  }
  componentWillMount(){

  }
  checkStatus = () => {
    let {isSwitchOn} = this.state;
    if(isSwitchOn){
      this.saveToLocalStorage();
      console.log('Contact Saved!');
    }
    else {
      this.removeFromLocalStorage();
    }
  }
  saveToLocalStorage = () => {
    let {contact, isSwitchOn} = this.state;
    let data = {
      name: contact.name,
      numberValue: contact.numberValue,
      numberType: contact.numberType,
      numberString: contact.numberString,
      isSwitchOn: isSwitchOn
    }
    realm.addContactLS(data);

  }
  removeFromLocalStorage = () => {
    let {contact, isSwitchOn} = this.state;
    let data = {
      name: contact.name,
      numberValue: contact.numberValue,
      numberType: contact.numberType,
      numberString: contact.numberString,
      isSwitchOn: isSwitchOn
    }
    realm.delContactLS(data);

  }

  toggleContact = () => {
    let {name, numberType, numberString, numberValue} = this.props;
    let {contactsClicked} = this.state;

    let obj = {
      name: name,
      numberType: numberType,
      numberString: numberString,
      numberValue: numberValue,
      isSwitchOn: !this.state.isSwitchOn
    }

    console.log("this is toggle contact");
    console.log(this.state.isSwitchOn);

    this.setState({
      contact: obj,
      isSwitchOn: !this.state.isSwitchOn,
    })
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
                disabled={true}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
