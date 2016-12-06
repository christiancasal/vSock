import React, { Component } from 'react';
import {
  TextInput,
  View,
  Modal,
} from 'react-native';

import SignInButton from './../loginView/SignInButton';
import ButtonStyles from './../loginView/styles/ButtonStyles';
import InputStyles from './../loginView/styles/InputStyles';
import ContactList from './ContactList';
import TabTitle from './../_main/TabTitle';

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

  }
  setContactModalVisible(visible){
    console.log('Close Modal');
    this.setState({
      modalVisible: visible,
    })
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
    console.log(ref);
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
        <SignInButton type='addRoomConfirm' buttonStyle={ButtonStyles.addRoomButton} buttonText='Add Room!' response={(ref)=>this.closeModal(ref)}/>
      )
    }
  }
  displayContactsButton = () => {
    if(this.state.showContacts){
      return(
        <SignInButton type='Contacts' buttonStyle={ButtonStyles.addRoomButton} buttonText='Contacts' response={(ref)=>this.displayContacts(ref)}/>
      )
    }
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

    return(
      <View style={this.props.modalStyle.container}>
         <View style={this.props.modalTitleStyle}>
           {this.props.modalTitle}
         </View>
         <View style={this.props.modalStyle.colContainer}>

           <TextInput style={InputStyles.inputBox}
             placeholder={roomName}
             onChangeText={(roomName) => this.validate_room(roomName)}
             autoCorrect={false}
             autoCapitalize="none"
           />
           {checkRoom}
           {checkContacts}
           {roomConfirm}
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
