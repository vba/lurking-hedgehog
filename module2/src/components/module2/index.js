
import React , { Component } from 'react';

import { Image, View, Text } from 'react-native';

export default class Module2 extends Component {
    render() {
        // 
        let pic = require('./resources/rangers.png');
        return (
            <View>
                <Text>
                    It's Rangers club, fellow!
                </Text>
                <Image source={pic} style={{ width: 250, height: 250 }} />
            </View>
        );
    }
}