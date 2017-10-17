
import React, { Component } from 'react';
import {
    Platform,
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Header from "./src/components/Header";
import Module1 from "./src/components/Content";

export default class App extends Component {

    render() {
        return (
            <View style={{flex: 1}} >
                <Header/>
                <ScrollView contentContainerStyle={styles.container}>
                    <Module1 />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
