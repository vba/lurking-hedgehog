import {AppRegistry, View} from 'react-native';
import App from './App';
import React, { Component } from 'react';


import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducers from './src/reducers';

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


AppRegistry.registerComponent('module1', () => ReduxApp );
// AppRegistry.registerComponent('module1', () => App );
