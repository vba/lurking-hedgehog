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
import Content from "./src/components/Content";

export default class App extends Component {

    render() {
        return (
            <View style={{flex: 1}} >
                <Header/>
                <ScrollView contentContainerStyle={styles.container}>
                    <Content />
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