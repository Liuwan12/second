# second

### 1. 底部导航

* 项目记录，第一步，安装组件 
  - npm install react-native-tab-navigator --save
  * * *
  该组件有更新
  应该使用npm install react-native-deprecated-custom-components --save安装
* 导入第三方组件 
  - import TabNavigator from 'react-native-deprecated-custom-components'
* 使用TabNavigator进行底部导航
* selectedTab默认home
#### 2.记录一次报错
1.导入react-native-tab-navigatorReactNative项目报UnhandledPromiseRejectionWarning 错误
原因：权限问题在上层目录下输入chmod -R 777 xxx(项目名) 解决
2.导入react-native-deprecated-custom-components导航控制组件时
原因：不能直接写Navigator：需写上renderScene等必备参数

