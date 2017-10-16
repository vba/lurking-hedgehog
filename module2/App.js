
import Module2 from './src/components/module2'
import EchidaApp from 'echidna-common';
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    ScrollView,
    View
} from 'react-native';

export default class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.delegate = new EchidaApp(props, context, {
            module2: this.renderModule2
        });
    }

    // noinspection JSMethodCanBeStatic
    renderModule2() {
        return (<Module2 />);
    }

    render() {
        return this.delegate.render();
    }
}