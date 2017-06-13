import React from 'react';
import {AppRegistry, View, Text, StyleSheet, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Hello, this is Home!</Text>
        <Button //用navigate跳转到chat页，传入参数{user:thinkreed}
          onPress= {() => navigate('Chat', {user:'thinkreed'})} title='chat with reed'/>
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({title: `Chat with ${navigation.state.params.user}`});
  render() {
    //传入的{user:'thinkreed'}
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>chat with {params.user}</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  //home页
  Home: {
    screen: HomeScreen
  },
  //chat页
  Chat: {
    screen: ChatScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// 注册应用(registerComponent)后才能正确渲染 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('DemoProject', () => SimpleApp);
