import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
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

import Contacts from 'react-native-unified-contacts';

import MainTabbedStyles from './../_main/MainTabbedStyles';
import SignInButton from './../loginView/SignInButton';

import TabTitle from './../_main/TabTitle';
import ButtonStyles from './../loginView/styles/ButtonStyles';
import AddRoomModal from './AddRoomModal';

//TODO: check modal tag - see if you need onRequestClose

export default class ApartmentView extends Component {
  constructor(props){
    super(props)
    this.state = {
        modalVisible: false,
        animationType: "fade",
        transparent: false,
        contacts: null,
    }
  }
  setModalVisible(visible){
    console.log('Close Modal');
    console.log(this.state.visible);
    this.setState({
      modalVisible: visible,
    })
  }
  setContacts(contacts){
    this.setState({
      contacts: contacts,
    });
  }
  addRoom = (ref) => {
    console.log(ref);
    console.log('this is add room');
    Contacts.userCanAccessContacts( (userCanAccessContacts) => {
      if (userCanAccessContacts) {
        this.setState({
          setModalVisible: true
        })
        console.log("User has access to Contacts!");
        Contacts.getContacts( (error, contacts) =>  {
          if (error) {
            console.error(error);
          }
          else {
            console.log(contacts);
            this.setContacts(contacts);
            this.setModalVisible(true)
          }
        });
      }
      else {
        Contacts.requestAccessToContacts( (userCanAccessContacts) => {
          if (userCanAccessContacts) {
            console.log("User has access to Contacts!");
          }
          else {
            console.log("User DOES NOT have access to Contacts!");
          }
        })
        console.log("User DOES NOT have access to Contacts!");
      }
    });
  }


  render(){
    return(
      <View style={MainTabbedStyles.container}>
          <Modal
            animationType={this.state.animationType}
            transparent={this.state.transparent}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
              <AddRoomModal modalStyle={MainTabbedStyles} modalResponse={(ref)=>this.setModalVisible(ref)}
              modalTitleStyle={MainTabbedStyles.titleContainer}
              modalTitle={<TabTitle titleText='Add Room'/>}
              visible={this.state.modalVisible}
              contacts={this.state.contacts}
            />

          </Modal>
        <View style={MainTabbedStyles.titleContainer}>
          <TabTitle titleText='Apartment'/>
        </View>
        <SignInButton type='addRoom' buttonStyle={ButtonStyles.addRoomButton} buttonText='Add New Room' response={(ref)=>this.addRoom(ref)}/>
      </View>
    )
  }
}
