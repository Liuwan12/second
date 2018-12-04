# second
## 一、第一章
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
1. 导入react-native-tab-navigatorReactNative项目报UnhandledPromiseRejectionWarning 错误
原因：权限问题在上层目录下输入chmod -R 777 xxx(项目名) 解决
2. 导入react-native-deprecated-custom-components导航控制组件时
原因：不能直接写Navigator：需写上renderScene等必备参数
3. React Native: Command `run-ios` unrecognized
解决：npm install --save react-native@latest
4. getting undefined is not a function (evaluating '(0,_reactNavigation.stacknavigator)') in drawer navigation
解决： Use createStackNavigator instead of stackNavigator.
## 二。第二章
### 1.导航器
  * StackNaigator类似于普通的navigator,屏幕上方导航栏
  * tabnavigator相当于ios里面的tabbarcontroller,屏幕下方标签栏
  * Rrawernavigator: 抽屉效果，侧边滑出
### 2.导航器三个属性
  * ref
  * onNavigationStateChange(prevState,newState,action) ( 导航器所管理的state发上改变时，调用该方法)
  * screenProps（向子屏幕传递额外的数据）this.props.screenProps
### 3.navigator的功能
  * navigate: 跳转到其他界面
  * state: 屏幕当前的state
  * setparams: 改变路由的params
  * goBack: 关闭当前屏幕
  * dispatch： 向路由发送一个action
### 4.使用navigate进行页面间跳转
  * navigate(routeName,params,action)
### 5.NavigationActions
  * Navigate: 导航到其他页面
    - navigate action 会使用navigation action的结果来更新当前的state，参数有(routeName,params,actions)
  * Reset: 重置当前state到一个新的state
    - Reset action删掉navigation state并且使用这个actions的结果来代替
    - 参数index actions
  * Back: 返回到上一个页面
  * Set Params: 设置指定页面的params(params,key)
  * init: 初始化stat如果state是undefined