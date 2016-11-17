import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
} from 'react-native';

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
    }
  }
  setModalVisible(visible){
    console.log('Flip Modal');
    this.setState({
      modalVisible: visible,
    })
  }

  addRoom = (ref) => {
    console.log(ref);
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
              visible={this.state.modalVisible} />
          </Modal>
        <View style={MainTabbedStyles.titleContainer}>
          <TabTitle titleText='Apartment'/>
        </View>
        <SignInButton type='addRoom' buttonStyle={ButtonStyles.addRoomButton} buttonText='Add Room' response={(ref)=>this.addRoom(ref)}/>
      </View>
    )
  }
}
