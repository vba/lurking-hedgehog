/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import EchidaApp from 'echidna-common';
import Module1 from './src/components/module1'
import {
    Platform,
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

export default class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.delegate = new EchidaApp(props, context, {
            module1: this.renderModule1
        });
    }
    
    // noinspection JSMethodCanBeStatic
    renderModule1() {
        return (<Module1 />);
    }
    
    render() {
        return this.delegate.render();
    }
}
