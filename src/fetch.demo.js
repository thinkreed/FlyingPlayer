import React, {Component} from 'react';
import {AppRegistry, ListView, Text, View} from 'react-native';

class ListViewBasics extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  fetchData() {
    fetch('http://guangdiu.com/api/gethots.php').then((response) => response.json()).then((responseData) => {
      this.setState({
        dataSource: this
          .state
          .dataSource
          .cloneWithRows(responseData.data)
      })
    }).done()
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 22
      }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}</Text>}/>
      </View>
    );
  }
}

// 注册应用(registerComponent)后才能正确渲染 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('DemoProject', () => ListViewBasics);