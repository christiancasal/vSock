import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  AsyncStorage
} from 'react-native';

import SignInButton from './../loginView/SignInButton';
import ButtonStyles from './../loginView/styles/ButtonStyles';
import ContactStyles from './styles/ContactStyles';
import Contact from './Contact';
import realm from './../../assets/store/index';

export default class ContactList extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactData: this.checkPhoneStorage(),
    }

  }
  componentWillMount(){

  }
  checkPhoneStorage(){
    let storageData = realm.getAllContactsLS();

    let internalContacts = [];
    let userContacts = this.props.contacts.map((contacts) => {
      // console.log(contacts.phoneNumbers);
      let userNumbers = contacts.phoneNumbers.map((numbers) => {
        let obj = {
          name: contacts.fullName,
          numberType: numbers.label,
          numberString: numbers.stringValue,
          numberValue: numbers.digits,
          isActive: false
        }
        if (numbers.label !== "home fax") {
          internalContacts.push(obj)
        }
      })
    })
    let activeContacts = this.checkForActiveContacts(storageData, internalContacts);
    return activeContacts;
  }
  checkForActiveContacts(storageData, contactData){
    for (var i = 0; i < storageData.length; i++) {
      for (var j = 0; j < contactData.length; j++) {
        if(storageData[i].numberValue === contactData[j].numberValue){
          contactData[j].isActive = true;
        }
      }
    }
    return contactData;
  }
  closeModal = (ref) => {
    console.log('Modal Closed in Contact list!');
    // console.log(ref);
    this.props.contactModalResponse(!this.props.visible);
  }
  render(){
    let {contactModalStyle, contactModalTitle} = this.props;
    let {contactData} = this.state;

    let userNumbers = contactData.map((data) => {
      return [
        <View>
          <Contact contactStyle={contactModalStyle}              name={data.name}
          numberType={data.numberType}
          numberString={data.numberString}
          numberValue={data.numberValue}
          isActive={data.isActive}
        />
        </View>
      ]
    })

    return(
      <View style={contactModalStyle.container}>
        <View style={contactModalStyle.titleContainer}>
          {contactModalTitle}
        </View>
        <ScrollView style={contactModalTitle.colContainer}>
          {userNumbers}
        </ScrollView>
        <View style={ContactStyles.clCloseContainer}>
          <SignInButton type='esc' buttonStyle={ButtonStyles.escButton} buttonText='Close' response={(ref)=>this.closeModal(ref)}/>
        </View>
      </View>
    )
  }
}
