import React from 'react';
import {View} from 'react-native';
import styles from '../sytles/demostyle';
import Video from 'react-native-video';

export default class PlayerScreen extends React.Component {

    video;

    render() {
        return (
            <View style={styles.container}>
                <Video
                    ref={(ref) => {
                    this.video = ref
                }}
                    //来自本地的MP4视频
                    source={{uri:'file:///storage/emulated/0/SHAREit/videos/dcw.mp4'}}
                    //1.0表示默认速率
                    rate={1.0}
                    //图片等比例缩放
                    resizeMode='contain'
                    //不重复播放
                    repeat={false}
                    //默认音量
                    volume={1.0}
                    //样式
                    style={styles.backgroundVideo}/>
            </View>
        );
    }
}