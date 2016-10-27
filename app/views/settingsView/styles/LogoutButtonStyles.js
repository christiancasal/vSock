'use strict';

import React, { Component } from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


export default StyleSheet.create({
  logoutButton: {
    marginTop: 15,
    backgroundColor: 'rgb(255,149,0)',
    height: 40,
    width: 240,
    borderRadius: 5,
    // zIndex: -1,
    alignItems: 'center',
    justifyContent:'center'
  },
  logoutButtonText: {
    fontFamily: 'Roboto-Medium',
    color: '#EEEEEE',
    fontWeight: 'bold',
    padding: 8,
    fontSize:16
  }
})
