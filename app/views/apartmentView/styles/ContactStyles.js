'use strict';

import React, { Component } from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const viewBackgroundColor = '#EEEEEE';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
    // marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    // borderTopWidth: 1,
    borderColor: '#AAAAAA',
    borderStyle: 'solid',
    backgroundColor: viewBackgroundColor,
    width: screenWidth
  },
  contactContainer : {
    paddingLeft: 15,
    flexDirection: 'row',
    width: screenWidth
  },
  contactItems: {
    alignItems: 'flex-start',
    width: screenWidth - 85,
  },
  contactSwitch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
  },
  pushNoteTextContainer: {
    alignItems: 'flex-start',
    width: screenWidth / 2
  },
  nameText: {
    fontFamily: 'Roboto-Medium',
    color: '#444444',
    fontWeight: 'bold',
    fontSize: 14,
  },
  phoneText: {
    fontFamily: 'Roboto-Medium',
    color: '#444444',
    fontWeight: 'bold',
    fontSize: 14,
  },
  labelText: {
    fontFamily: 'Roboto-Medium',
    color: '#999999',
    fontSize: 12,
  },
  clCloseContainer: {
    backgroundColor: '#DDDDDD',
    borderTopWidth: 1,
    borderColor: '#AAAAAA',
    alignItems: 'center',
    width: screenWidth
  }
})
