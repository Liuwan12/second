/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// import { AppStackNavigator } from './navigators/AppNavigators'


// export default AppStackNavigator;

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
// const props ={}
export default class List extends Component{
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>hahhajasgkdah</Text> */}
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
// import TabN
// import {Navigator} from 'react-native-deprecated-custom-components'
// import home from './home'

// export default class App extends Component{
//   render() {
//     return (
//       <View style={styles.container}>

//         <Navigator
//                 initialRoute={{component:home}}
//                 configureScene={this._configureScene.bind(this)}
//                 renderScene={this._renderScene.bind(this)}
//                 style={{flex:1}}
//             />
            
//       </View>
//     )
//   }
//     // 配置场景跳转方向
//   _configureScene(route, routeStack) {
//     return Navigator.SceneConfigs.PushFromLeft;
//   }
//   // 生成组件,变量要用{}包住
//   _renderScene(route, navigator) {

    
//     // 把导航控制器传递给HomeView
//     // ...route: 获取route中所有属性,传递给HomeView
//     // ...扩展符, 作用:如果是对象,就获取对象中所有值,如果是数组,就获取数组中所有值
//     // <route.component navigator={navigator} {...route}/> 类似下面写法，把route的属性取出来赋值
//     // <route.component navigator={navigator} component=route.component/>
//     return (<route.component navigator={navigator} {...route}/>)
//   }
//   // 生成组件,变量要用{}包住
//   _renderScene(route, navigator) {

//     // 类似<HomeView navigator={navigator} {...route.props}/>
//     // 把导航控制器传递给HomeView
//     // ...route.props: 获取route中所有属性,传递给HomeView
//     // ...扩展符, 作用:如果是对象,就获取对象中所有值,如果是数组,就获取数组中所有值
//     return (<route.component navigator={navigator} {... route.props}/>)
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   page1:{
//     flex:1,
//     backgroundColor: 'red'
//   },
//   page1:{
//     flex:2,
//     backgroundColor: 'yellow'
//   }
// });
