'use strict';

import React, { Component } from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  noteTextContainer: {
    alignItems: 'flex-start',
    width: screenWidth / 2
  },
  noteText: {
    fontFamily: 'Roboto-Medium',
    margin: 10,
    padding: 10
  }
})
