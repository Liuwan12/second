/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'

// const props ={}
export default class App extends Component{
  constructor(props){
    super(props);
    // this.state={
    //   selectedTab:'home'
    // }
  }
  render() {
    return (
      // <Navigator />
      <View style={styles.container}>
        <Navigator
            />
         {/* <Navigator /> */}
        {/* <Navigator /> */}
          {/* <Navigator.Item></Navigator.Item> */}
          {/* <Navigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image source={require('./res/image/ic_polular.png')} />}
            renderSelectedIcon={() => <Image source={require('./res/image/ic_polular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page1}></View>
          </Navigator.Item>
          <Navigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Image source={require('./res/image/ic_trending.png')} />}
            renderSelectedIcon={() => <Image source={require('./res/image/ic_trending.png')} />}
            renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <View style={styles.page2}></View>
          </Navigator.Item> */}
        {/* </Navigator> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor: 'red'
  },
  page1:{
    flex:2,
    backgroundColor: 'yellow'
  }
});
