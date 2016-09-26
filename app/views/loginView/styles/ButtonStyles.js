'use strict';

import React, { Component } from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
    // width: 312,
  },
  loginFBButton: {
    marginBottom: 5
  },
  loginGGButton: {
    marginTop: 5,
    backgroundColor: 'white',
    height: 50,
    width: 175,
    borderRadius: 5,
    // zIndex: -1,
    alignItems: 'center',
    justifyContent:'center'
  },
  createAcctContainer:{
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  signInButton: {
    backgroundColor: 'blue',
    width: 100,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    justifyContent:'center',
    alignItems: 'center'
  },
  createAcctButton: {
    backgroundColor: 'green',
    width: 100,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    justifyContent:'center',
    alignItems: 'center'
  },
  forgotContainer:{
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  forgotButton: {
    backgroundColor: 'blue',
    width: 75,
    height: 20,
    marginLeft: 5,
    marginRight: 5,
    justifyContent:'center',
    alignItems: 'center'
  },
  forgotButtonText:{
    fontSize: 10,
  }
})
