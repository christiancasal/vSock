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
    debugger;
    this.state = {
      storageData: realm.getAllContactsLS(),
      contactData: this.checkPhoneStorage()
    }
  }
  componentWillMount(){
    console.log(this.state);
    console.log('this is debuggger in componentWillMount');
    debugger;
  }
  checkPhoneStorage(){
    let pkg = [];
    let userContacts = this.props.contacts.map((contacts) => {
      console.log(contacts.phoneNumbers);
      let userNumbers = contacts.phoneNumbers.map((numbers) => {
        let obj = {
          name: contacts.fullName,
          numberType: numbers.label,
          numberString: numbers.stringValue,
          numberValue: numbers.digits,
          isActive: false
        }
        if (numbers.label !== "home fax") {
          pkg.push(obj)
        }
      })
      console.log(pkg);
    })
    return pkg
  }
  checkStorage(numbers){
    let {storageData} = this.state;
    for (var i = 0; i < storageData.length; i++) {
      if(storageData[i].numberValue === numbers){
        console.log('comparison made!');
        return true;
      }
      else{
        return false;
      }
    }

  }
  closeModal = (ref) => {
    console.log('Modal Closed in Contact list!');
    // console.log(ref);
    this.props.contactModalResponse(!this.props.visible);
  }
  render(){
    let {contactModalStyle, contactModalTitle} = this.props;

    let userContacts = this.props.contacts.map((contacts) => {
      let userNumbers = contacts.phoneNumbers.map((numbers) => {
        let switchStatus = this.checkStorage(numbers.digits);

        if (numbers.label !== "home fax") {
          return [
            <View>
              <Contact contactStyle={contactModalStyle}              name={contacts.fullName}
              numberType={numbers.label}
              numberString={numbers.stringValue}
              numberValue={numbers.digits}
              isActive={switchStatus}
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
        </ScrollView>
        <View style={ContactStyles.clCloseContainer}>
          <SignInButton type='esc' buttonStyle={ButtonStyles.escButton} buttonText='Close' response={(ref)=>this.closeModal(ref)}/>
        </View>
      </View>
    )
  }
}
