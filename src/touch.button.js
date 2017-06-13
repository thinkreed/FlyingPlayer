import React, {Component} from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Alert
} from 'react-native';

class MyButton extends Component {
  _onPressButton() {
    Alert.alert('demoproject', 'you have tap the button', {cancelable: true})
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// 注册应用(registerComponent)后才能正确渲染 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('DemoProject', () => MyButton);