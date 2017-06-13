import React from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ChatScreen from './src/pages/page.chat';
import HomeScreen from './src/pages/page.home';
import PlayerScreen from './src/pages/page.player';

const SimpleApp = StackNavigator({
  //home页
  Home: {
    screen: HomeScreen
  },
  //chat页
  Chat: {
    screen: ChatScreen
  },
  //播放器页面
  Player: {
    screen: PlayerScreen
  }
});

// 注册应用(registerComponent)后才能正确渲染 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('DemoProject', () => SimpleApp);
