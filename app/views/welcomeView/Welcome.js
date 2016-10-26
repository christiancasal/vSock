import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';

import HomeView from '../homeView/HomeView'
import SettingsView from '../settingsView/SettingsView'
import ApartmentView from '../apartmentView/ApartmentView'


export default class Welcome extends Component {
  constructor(props){
    super(props)
      this.state = {
        selectedTab: 'rightTab'
      }
  }

  renderContent = (renderPage) => {
    // debugger;
    // console.log('this is render content');

    let { title0 , title1 , title2 } = this.props;

    if(renderPage === title0){
      return(
          <ApartmentView />
      )
    }
    if(renderPage === title1){
      return(
          <HomeView />
      )
    }
    if(renderPage === title2){
      return(
          <SettingsView />
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
            icon={require('../..//assets/icons/groups25.png')}
            selected={selectedTab === 'leftTab'}
            onPress={()=>{
              this.setState({ selectedTab: 'leftTab' })
          }}
          >
            {this.renderContent(title0)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={title1}
            icon={require('../..//assets/icons/door25.png')}
            selected={selectedTab === 'centerTab'}
            onPress={()=>{
              this.setState({ selectedTab: 'centerTab' })
            }}
          >
            {this.renderContent(title1)}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={title2}
            icon={require('../..//assets/icons/settings25.png')}
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
