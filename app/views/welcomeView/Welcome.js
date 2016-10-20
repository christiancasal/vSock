import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';

import Sock from '../sockView/Sock'
import Settings from '../settingsView/Settings'
import Apartment from '../apartmentView/Apartment'


export default class Welcome extends Component {
  constructor(props){
    super(props)
      this.state = {
        selectedTab: 'centerTab'
      }
  }

  renderContent = (renderPage) => {
    // debugger;
    // console.log('this is render content');

    let { title0 , title1 , title2 } = this.props;

    if(renderPage === title0){
      return(
          <Apartment />
      )
    }
    if(renderPage === title1){
      return(
          <Sock />
      )
    }
    if(renderPage === title2){
      return(
          <Settings />
      )
    }
  }

  render(){
    console.log('welcome view!');

    let { title0 , title1 , title2 } = this.props;
    let { selectedTab } = this.state;

    return(
      <TabBarIOS>
          <TabBarIOS.Item
          title={title0}
          selected={selectedTab === 'leftTab'}
          onPress={()=>{
            this.setState({ selectedTab: 'leftTab' })
          }}
          >
            {this.renderContent(title0)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={title1}
            selected={selectedTab === 'centerTab'}
            onPress={()=>{
              this.setState({ selectedTab: 'centerTab' })
            }}
          >
            {this.renderContent(title1)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={title2}
            selected={selectedTab === 'rightTab'}
            onPress={()=>{
              this.setState({ selectedTab: 'rightTab' })
            }}
          >
            {this.renderContent(title2)}
          </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}
