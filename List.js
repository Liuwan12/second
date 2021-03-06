/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
// import {Navigator} from 'react-native-deprecated-custom-components'
import TabNavigator from 'react-native-tab-navigator';


// const props ={}
export default class List extends Component{
  constructor(props){
    super(props);
    this.state={
        selectedTab: 'tb_popular'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_popular'}
                title="最热"
                selectedTitleStyle={{color:'red'}}
                renderIcon={()=><Image style={styles.image} source={require('./res/image/ic_polular.png')}/>}
                renderSelectedIcon={()=><Image style={[styles.image,{tintColor:'red'}]} source={require('./res/image/ic_polular.png')}/>}
                onPress={()=>this.setState({selectedTab: 'tb_popular'})}>
            <View style={styles.page1}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_trending'}
                title="趋势"
                selectedTitleStyle={{color:'yellow'}}
                renderIcon={()=><Image style={styles.image} source={require('./res/image/ic_trending.png')}/>}
                renderSelectedIcon={()=><Image style={[styles.image,{tintColor: 'blue'}]} source={require('./res/image/ic_trending.png')}/>}
                onPress={()=>this.setState({selectedTab: 'tb_trending'})}>
            <View style={styles.page2}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_favorite'}
                title="收藏"
                selectedTitleStyle={{color:'red'}}
                renderIcon={()=><Image style={styles.image} source={require('./res/image/ic_polular.png')}/>}
                renderSelectedIcon={()=><Image style={[styles.image,{tintColor:'red'}]} source={require('./res/image/ic_polular.png')}/>}
                onPress={()=>this.setState({selectedTab: 'tb_favorite'})}>
            <View style={styles.page1}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'tb_my'}
                title="我的"
                selectedTitleStyle={{color:'yellow'}}
                renderIcon={()=><Image style={styles.image} source={require('./res/image/ic_trending.png')}/>}
                renderSelectedIcon={()=><Image style={[styles.image,{tintColor: 'blue'}]} source={require('./res/image/ic_trending.png')}/>}
                onPress={()=>this.setState({selectedTab: 'tb_my'})}>
            <View style={styles.page2}></View>
            </TabNavigator.Item>
        </TabNavigator>
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
    page2:{
      flex:1,
      backgroundColor: 'yellow'
    },
    image: {
        width: 22,
        height: 22
    }
  });
