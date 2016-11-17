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
      roomName: 'Room Name'
    }
  }
  validate_room = (roomName) => {
    this.setState({
      roomName: roomName
    })
  }
  closeModal = (ref) => {
    console.log('Modal Closed!');
    this.props.modalResponse(!this.props.visible);
  }

  render(){
    let {roomName} = this.state
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
           <SignInButton type='closeModal' buttonStyle={ButtonStyles.addRoomButton} buttonText='Close' response={(ref)=>this.closeModal(ref)}/>
        </View>
      </View>
    )
  }
}
