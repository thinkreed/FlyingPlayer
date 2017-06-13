import React, {Component} from 'react';
import {AppRegistry, Image} from 'react-native';

class Bananas extends Component {
    render() {
        return (<Image
            source={require('./img/zm.jpeg')}
            style={{
            width: 193,
            height: 110
        }}/>);
    }
}

AppRegistry.registerComponent('DemoProject', () => Bananas);