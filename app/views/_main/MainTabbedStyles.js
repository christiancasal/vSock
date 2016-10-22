'use strict';

import React, { Component } from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#DDDDDD',
    justifyContent:'center',
    alignItems: 'center'
  }
})
