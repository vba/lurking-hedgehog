
import React, { Component } from 'react';

import { Image, View, Text } from 'react-native';

export default class Module1 extends Component {
    render() {
        props = {
            some: 1
        }
        let pic = require('./resources/celtic.jpg');
        return (
            <View>
                <Text>
                    It's Celtic bro!
                </Text>
                <Image source={pic} style={{ width: 250, height: 250 }} />
            </View>
        );
    }
}