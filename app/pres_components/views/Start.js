import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

import {createStore} from 'redux';

import Home from './homeView/Home'
import Settings from './settingsView/Settings'
import Log from './logView/Log'


export default class Start extends Component {
  constructor(props){
    super(props)
      this.state = {
        selectedTab: 'homeTab'
      }
  }


  _toNavigator(route){
    // debugger;
    // this.props.navigator.push({
    //   index: route
    // })
  }

  _renderContent(renderPage){
    return(
      <View>
        {renderPage}
      </View>
    )
  }

  render(){
    return(
      // <Text>This is the startView</Text>

      <TabBarIOS
        style={{height: 20}}
      >
          <TabBarIOS.Item
          title='Log'
          selected={this.state.selectedTab === 'logTab'}
          onPress={()=>{
            this.setState({
              selectedTab: 'logTab'
            })
          }}
          >
            {this._renderContent(<Log />)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Home'
            selected={this.state.selectedTab === 'homeTab'}
            onPress={()=>{
              this.setState({
                selectedTab: 'homeTab'
              })
            }}
          >
            {this._renderContent(<Home />)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Settings'
            selected={this.state.selectedTab === 'settingsTab'}
            onPress={()=>{
              this.setState({
                selectedTab: 'settingsTab'
              })
            }}
          >
            {this._renderContent(<Settings />)}
          </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}
