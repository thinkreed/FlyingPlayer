import React from 'react';
import {View, Button, Text} from 'react-native';
import styles from '../sytles/demostyle';

export default class HomeScreen extends React.Component {
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
                <Button onPress={() => navigate('Player')} title='play video'/>
            </View>
        );
    }
}