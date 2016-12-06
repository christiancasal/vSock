import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Switch,
  AsyncStorage
} from 'react-native';

import Storage from 'react-native-storage';

var storage = new Storage({
    // maximum capacity, default 1000
    size: 1000,

    // Use AsyncStorage for RN, or window.localStorage for web.
    // If not set, data would be lost after reload.
    storageBackend: AsyncStorage,

    // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: 1000 * 3600 * 24,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired,
    // the corresponding sync method will be invoked and return
    // the latest data.
    sync : {
        // we'll talk about the details later.
    }
})

import ContactStyles from './styles/ContactStyles';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      contact: '',
      isSwitchOn: false,
    }
  }
  componentDidUpdate(){
    this.sendToLocal();
  }
  componentDidMount(){
    console.log(storage);
  }
  sendToLocal(){

    let {name, numberType, numberString, numberValue} = this.props;
    let {contact, isSwitchOn} = this.state;


    if(this.state.isSwitchOn){
      storage.save({
          key: 'user',
          id: numberValue,   // Note: Do not use underscore("_") in id!
          rawData: contact,
          expires: 1000 * 60
      });
      // load
      storage.load({
          key: 'user',
          id: numberValue,
          rawData: contact
      }).then(ret => {
          // found data goes to then()
          console.log(storage);
          console.log(ret.userid);
      }).catch(err => {
          // any exception including data not found
          // goes to catch()
          console.warn(err.message);
          switch (err.name) {
              case 'NotFoundError':
                  // TODO;
                  break;
              case 'ExpiredError':
                  // TODO
                  break;
          }
      });
    }
    else {
      storage.remove({
        key: 'user',
        // key: numberValue,
        id: numberValue
      });
    }
  }
  toggleContact = () => {
    let {name, numberType, numberString, numberValue} = this.props;

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
