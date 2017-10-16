import { AppRegistry } from 'react-native';
import { combineReducers } from 'redux';
import {default as Module1App} from 'echidna-module1/App';
import {default as Module2App} from 'echidna-module2/App';
import {getReducersObject} from 'echidna-module1/src/reducers'
import App from './App';

import React, { Component } from 'react';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

const reducers = combineReducers(
    Object.assign({},
                  Module1App.DESCRIPTOR.reducers,
                  Module2App.DESCRIPTOR.reducers )
);

const store = createStore(reducers, {});

class ReduxApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('assembly', () => ReduxApp);
