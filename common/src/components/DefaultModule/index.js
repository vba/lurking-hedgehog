import {Image, Text, View} from 'react-native';

import React from 'react';


export default class DefaultModule extends React.Component{
    render() {
        let pic = require('./resources/placeholder.jpg');
        return (
            <View>
                <Text>
                    Placeholder DefaultModule
                </Text>
                <Image source={pic} style={{ width: 250, height: 250 }} />
            </View>
        );
    }
}