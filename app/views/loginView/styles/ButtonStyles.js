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
    marginTop: 15,
    backgroundColor: '#4267B2',
    height: 40,
    width: 240,
    borderRadius: 5,
    // zIndex: -1,
    alignItems: 'center',
    justifyContent:'center'
  },
  loginGOOGButton: {
    marginTop: 15,
    backgroundColor: '#d34836',
    height: 40,
    width: 240,
    borderRadius: 5,
    // zIndex: -1,
    alignItems: 'center',
    justifyContent:'center'
  },
  loginButtonText:{
    fontFamily: 'Roboto-Medium',
    color: '#EEEEEE',
    fontWeight: 'bold',
    padding: 8,
    fontSize:16
  },
  loginEmailButton: {
    marginTop: 15,
    backgroundColor: '#999999',
    height: 40,
    width: 240,
    borderRadius: 5,
    // zIndex: -1,
    alignItems: 'center',
    justifyContent:'center'
  },
  createAcctContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  signInButton: {
    backgroundColor: 'rgb(76,217,100)',
    width: 100,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    justifyContent:'center',
    alignItems: 'center'
  },
  createAcctButton: {
    backgroundColor: 'rgb(76,217,100)',
    width: 100,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    justifyContent:'center',
    alignItems: 'center'
  },
  addRoomButton: {
    backgroundColor: 'rgb(76,217,100)',
    width: 240,
    height: 50,
    borderRadius: 5,
    marginTop: 5,
    justifyContent:'center',
    alignItems: 'center'
  },
  escButton: {
    backgroundColor: 'rgb(255,59,48)',
    width: 240,
    height: 50,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    justifyContent:'center',
    alignItems: 'center'
  },
  forgotContainer:{
    // backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  forgotButton: {
    backgroundColor: 'rgb(76,217,100)',
    width: 240,
    height: 50,
    borderRadius: 5,
    justifyContent:'center',
    alignItems: 'center'
  },
  forgotButtonText:{
    fontFamily: 'Roboto-Medium',
    color: '#EEEEEE',
    fontWeight: 'bold'
  }
})
