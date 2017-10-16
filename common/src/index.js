

import DefaultModule from './components/DefaultModule';
import Header from './components/Header';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View
} from 'react-native';


export default class EchidnaApp extends Component {

    constructor(props, context, renders = {}) {
        super(props, context);
        this.props = props;
        this.context = context;

        this.renders = {
            module1: renders.module1 || EchidnaApp.renderModule1,
            module2: renders.module2 || EchidnaApp.renderModule2
        }
    }

    static renderModule1() {
        return (<DefaultModule />);
    }

    static renderModule2() {
        return (<DefaultModule />);
    }

    render() {
        return (
            <View style={{flex: 1}} >
                <Header/>
                <ScrollView contentContainerStyle={styles.container}>
                    {this.renders.module1()}
                    {this.renders.module2()}
                </ScrollView>
                <Text style={styles.instructions}>
                    Just a footer buddy
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});