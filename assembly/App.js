import EchidaApp from 'echidna-common';
import {default as Module1App} from 'echidna-module1/App';
import {default as Module2App} from 'echidna-module2/App';

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
        this.module1 = new Module1App(props, context);
        this.module2 = new Module2App(props, context);
        this.delegate = new EchidaApp(props, context, {
            module1: this.module1.renderModule1,
            module2: this.module2.renderModule2
        });
    }

    render() {
        return this.delegate.render();
    }
}
