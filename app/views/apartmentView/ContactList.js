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


export default class ContactList extends Component {
  constructor(props){
    super(props);

    this.state = {
      storageData: ''
    }
  }
  componentWillMount(){
    // this.loadStorage()

  }
  loadStorage(numbers){
    // console.log(numbers);

  }
  closeModal = (ref) => {
    console.log('Modal Closed in Contact list!');
    // console.log(ref);
    this.props.contactModalResponse(!this.props.visible);
  }
  render(){
    let {contactModalStyle, contactModalTitle} = this.props;

    let userContacts = this.props.contacts.map((contacts) => {
      // console.log(contacts.phoneNumbers);

      let userNumbers = contacts.phoneNumbers.map((numbers) => {
        // console.log(numbers)
        this.loadStorage(numbers.digits);

        if (numbers.label !== "home fax") {
          return [
            <View>
              <Contact contactStyle={contactModalStyle}              name={contacts.fullName}
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
        </ScrollView>
        <View style={ContactStyles.clCloseContainer}>
          <SignInButton type='esc' buttonStyle={ButtonStyles.escButton} buttonText='Close' response={(ref)=>this.closeModal(ref)}/>
        </View>
      </View>
    )
  }
}
