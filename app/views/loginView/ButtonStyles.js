'use strict';

import React, { Component } from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    height: 125,
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
    height: 48,
    width: 175,
    borderRadius: 5,
    // zIndex: -1,
    alignItems: 'center',
    justifyContent:'center'
  }
})
