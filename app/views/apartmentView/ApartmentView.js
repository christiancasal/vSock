import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
  TouchableHighlight
} from 'react-native';

import Contacts from 'react-native-unified-contacts';

import MainTabbedStyles from './../_main/MainTabbedStyles';

import TabTitle from './../_main/TabTitle';
import SignInButton from './../loginView/SignInButton';
import ButtonStyles from './../loginView/styles/ButtonStyles';


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
            <View style={{marginTop: 22}}>
             <View>
               <Text>Hello World!</Text>

               <TouchableHighlight onPress={() => {
                 this.setModalVisible(!this.state.modalVisible)
               }}>
                 <Text>Hide Modal</Text>
               </TouchableHighlight>

             </View>
            </View>
        </Modal>
        <View style={MainTabbedStyles.titleContainer}>
          <TabTitle titleText='Apartment'/>
        </View>
        <SignInButton type='addRoom' buttonStyle={ButtonStyles.addRoomButton} buttonText='Add Room' response={(ref)=>this.addRoom(ref)}/>
      </View>
    )
  }
}
