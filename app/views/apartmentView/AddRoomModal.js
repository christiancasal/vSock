import React, { Component } from 'react';
import {
  TextInput,
  View,
  Text,
  Modal,
} from 'react-native';

import SignInButton from './../loginView/SignInButton';
import ContactToConfirm from './ContactToConfirm';
import ButtonStyles from './../loginView/styles/ButtonStyles';
import InputStyles from './../loginView/styles/InputStyles';
import ContactStyles from './styles/ContactStyles';
import ContactList from './ContactList';
import TabTitle from './../_main/TabTitle';
import ApartmentViewStyles from './styles/ApartmentViewStyles';
import realm from './../../assets/store/index';

export default class AddRoomModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      roomName: 'Room Name',
      validRoom: false,
      validRoomText: '',
      showNext: false,
      showContacts: false,
      roomConfirm: false,
      modalVisible: false,
      animationType: "fade",
      transparent: false,
    }
  }
  componentWillMount(){
    //TODO: clear local storage
    this.clearLocalStorage();
  }
  clearLocalStorage(){
    realm.deleteAll();
  }
  setContactModalVisible(visible){
    console.log('Close Modal');
    let storageData = realm.getAllContactsLS();
    if(storageData.length === 0){
      this.setState({
        roomConfirm: false,
        showNext: false,
        modalVisible: visible,
      })
    }
    else{
      this.setState({
        roomConfirm: true,
        modalVisible: visible,
      })
    }
  }
  validate_room = (roomName) => {
    let roomVal = /^[a-zA-Z0-9]{4,15}$/;

    if(roomVal.test(roomName)){
      this.setState({
        roomName: roomName,
        validRoom: true,
        showNext: true,
        validRoomText: 'Room is valid!'
      })
    }
    else{
      this.setState({
        roomName: roomName,
        validRoom: false,
        validRoomText: 'Room is NOT valid!'
      })
    }
  }

  closeModal = (ref) => {
    console.log('Modal Closed!');
    this.props.modalResponse(!this.props.visible);
  }

  roomSaved = () =>{
    if(this.state.validRoom && this.state.showNext){
      return(
        <SignInButton type='saveRoomName' buttonStyle={ButtonStyles.addRoomButton} buttonText='Next' response={()=>this.hideNextShowContactsButton()}/>
      )
    }
  }
  hideNextShowContactsButton = () => {
    this.setState({
      showContacts: true,
      // modalVisible: true,
      showNext: false,
    })
  }
  displayRoomConfirm = () => {
    if(this.state.roomConfirm){
      return(
        <SignInButton type='addRoomConfirm' buttonStyle={ButtonStyles.addRoomButton} buttonText='Confirm!' response={(ref)=>this.sendToFirebase(ref)}/>
      )
    }
  }
  sendToFirebase = (ref) => {
    //TODO: send storageData selected to firebase
    this.closeModal(ref);
  }
  displayContactsButton = () => {
    if(this.state.showContacts){
      return(
        <SignInButton type='Contacts' buttonStyle={ButtonStyles.addRoomButton} buttonText='Contacts' response={(ref)=>this.displayContacts(ref)}/>
      )
    }
  }
  displayLocalStorage = () => {
    let {roomName, showContacts, validRoom} = this.state;

    let storageData = realm.getAllContactsLS();
    if(storageData.length === 0){
      return [
        <TextInput style={InputStyles.inputBox}
          placeholder={roomName}
          onChangeText={(roomName) => this.validate_room(roomName)}
          autoCorrect={false}
          autoCapitalize="none"
        />
      ];
    }
    let storageView = storageData.map((data)=>{
      return [
        <View>
          <ContactToConfirm contactName={data.name} contactNumber={data.numberValue}/>
        </View>
      ]
    })
    return [
      <View style={ApartmentViewStyles.contactContainer}>
          <Text style={ApartmentViewStyles.titleText}>You are adding...</Text>
        <View style={ApartmentViewStyles.contactContainer}>
          {storageView}
        </View>
        <Text style={ApartmentViewStyles.titleText}>to {roomName}!</Text>
      </View>
    ]
  }
  displayContacts = () => {
    this.setState({
      modalVisible: true
    })
  }
  render(){
    let {roomName, showContacts, validRoom} = this.state
    let checkRoom = this.roomSaved();
    let checkContacts = this.displayContactsButton();
    let roomConfirm = this.displayRoomConfirm();
    let storageData = this.displayLocalStorage();

    return(
      <View style={this.props.modalStyle.container}>
         <View style={this.props.modalTitleStyle}>
           {this.props.modalTitle}
         </View>

         <View style={ApartmentViewStyles.colContainer}>
           {storageData}
           {checkRoom}
           {roomConfirm}
           {checkContacts}
           <SignInButton type='esc' buttonStyle={ButtonStyles.escButton} buttonText='Close' response={(ref)=>this.closeModal(ref)}/>
           <Modal
             animationType={this.state.animationType}
             transparent={this.state.transparent}
             visible={this.state.modalVisible}
             onRequestClose={() => {alert("Modal has been closed.")}}>
             <ContactList contactModalStyle={this.props.modalStyle}
             contactModalResponse={(ref)=>this.setContactModalVisible(ref)}
             contactModalTitle={<TabTitle titleText='Choose Contacts'/>}
             visible={this.state.modalVisible}
             contacts={this.props.contacts}/>
            </Modal>
        </View>
      </View>
    )
  }
}
