import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

export default class HomePages extends Component{
    render() {
        return (
          <View style={styles.container}>
    
           <Text style={styles.page1}>1234</Text>
                
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