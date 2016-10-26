'use strict';

import React, { Component } from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pushNoteTextContainer: {
    alignItems: 'flex-start',
    width: screenWidth / 2
  },
  pushNoteText: {
    fontFamily: 'Roboto-Medium',
    marginLeft: 20,
  },
  switchButtonContainer: {
    alignItems: 'flex-end',
    width: screenWidth / 2
  },
  switchButton: {
    marginRight: 20,
  }
})
