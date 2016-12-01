import React, { Component } from 'react';
import {
  TextInput,
  View,
  Modal,
} from 'react-native';

import SignInButton from './../loginView/SignInButton';
import ButtonStyles from './../loginView/styles/ButtonStyles';
import InputStyles from './../loginView/styles/InputStyles';

export default class AddRoomModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      roomName: 'Room Name',
      validRoom: false,
      validRoomText: '',
      showNext: false,
      showContacts: false
    }
  }
  componentWillMount(){

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
        <SignInButton type='saveRoomName' buttonStyle={ButtonStyles.addRoomButton} buttonText='Next' response={()=>this.hideNextShowContacts()}/>
      )
    }
  }
  hideNextShowContacts = () => {
    this.setState({
      showContacts: true,
      showNext: false
    })
  }
  displayContactsButton = () => {
    if(this.state.showContacts){
      return(
        <SignInButton type='showContacts' buttonStyle={ButtonStyles.addRoomButton} buttonText='Contacts' response={(ref)=>this.closeModal(ref)}/>
      )
    }
  }

  render(){
    let {roomName, showContacts, validRoom} = this.state
    let checkRoom = this.roomSaved();
    let checkContacts = this.displayContactsButton();

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
           <SignInButton type='addRoomConfirm' buttonStyle={ButtonStyles.addRoomButton} buttonText='Add Room' response={(ref)=>this.closeModal(ref)}/>
           <SignInButton type='esc' buttonStyle={ButtonStyles.escButton} buttonText='Close' response={(ref)=>this.closeModal(ref)}/>
        </View>
      </View>
    )
  }
}
