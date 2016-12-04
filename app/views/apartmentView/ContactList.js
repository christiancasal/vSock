import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import SignInButton from './../loginView/SignInButton';
import ButtonStyles from './../loginView/styles/ButtonStyles';
import Contact from './Contact';

export default class ContactList extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }
  closeModal = (ref) => {
    console.log('Modal Closed!');
    console.log(ref);
    this.props.contactModalResponse(!this.props.visible);
  }
  render(){
    console.log(this.props);
    let {contactModalStyle, contactModalTitle} = this.props;

    let userContacts = this.props.contacts.map((contacts) => {
      console.log(contacts.phoneNumbers);

      let userNumbers = contacts.phoneNumbers.map((numbers) => {
        console.log(numbers)
        if (numbers.label !== "home fax") {
          return [
            <View>
              <Contact name={contacts.fullName}
              numberType={numbers.label}
              numberString={numbers.stringValue}
              numberValue={numbers.digits}
            />
            </View>
          ]
        }
      })
      return [
        <View>
          {userNumbers}
        </View>
      ]
    })

    return(
      <View style={contactModalStyle.container}>
        <View style={contactModalStyle.titleContainer}>
          {contactModalTitle}
        </View>
        <ScrollView style={contactModalTitle.colContainer}>
          {userContacts}
          <SignInButton type='esc' buttonStyle={ButtonStyles.escButton} buttonText='Close' response={(ref)=>this.closeModal(ref)}/>
        </ScrollView>
      </View>
    )
  }
}
