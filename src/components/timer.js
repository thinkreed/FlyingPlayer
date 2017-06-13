import React, {Component} from 'react';
import {View} from 'react-native';

export default class DemoTimer extends Component {
    componentDidMount() {
        //设置500 ms后执行，打印log
        this.timer = setTimeout(() => {
            console.log('a simple timer');
        }, 500);
    }
    componentWillUnmount() {
        //在unmount回调清除定时器
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{
                ...this.props.style
            }}>
                {this.props.children}
            </View>
        );
    }
};