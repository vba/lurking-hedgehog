import {AppRegistry, View} from 'react-native';
import App from './App';
import { EchidnaApp } from 'echidna-common';
import React, { Component } from 'react';


import { Provider } from 'react-redux';

import { createStore, applyMiddleware, combineReducers } from 'redux';

import reducer from './src/reducers';

const store = createStore(reducer, {});

store.subscribe(() => alert(JSON.stringify(store.getState())));

class ReduxApp extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => <App />}
            </Provider>
        );
    }
}


AppRegistry.registerComponent('module1', () => ReduxApp );
// AppRegistry.registerComponent('module1', () => App );
