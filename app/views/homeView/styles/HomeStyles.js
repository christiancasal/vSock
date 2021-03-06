'use strict';

import React, { Component } from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  doorStatusText: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'bold',
    color: '#444444'
  },
  imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    padding: 20
  }
})
