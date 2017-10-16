import { AppRegistry } from 'react-native';
import App from './App';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

const store = createStore(reducers, {});

store.dispatch({type: 'CHOOSE_SERVICE', name: 'Fake name'});

class ReduxApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

// AppRegistry.registerComponent('module2', () => App);
AppRegistry.registerComponent('module2', () => ReduxApp);
