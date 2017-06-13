import React from 'react';
import {View, Text} from 'react-native';
import styles from '../sytles/demostyle';

export default class ChatScreen extends React.Component {
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