
import React , { Component } from 'react';
import { Image, View, Text } from 'react-native';
import {connect} from 'react-redux'
import {ping} from '../actions';

class Module2 extends Component {

    onRendered = () => () => this.props.ping(`Hello from Module2 at ${new Date().toTimeString()}`);

    render() {
        let pic = require('./resources/rangers.png');
        return (
            <View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'left',
                    alignItems: 'left',
                }}>
                    <Text>Easy</Text>
                    <Text>Hedgehog</Text>
                </View>
                <View onComponentDidMount={this.onRendered.bind(this)}>
                    <Text>
                        It's Rangers club, fellow!
                    </Text>
                    <Text>
                        Selected service name: {this.props.selectedServiceName}
                    </Text>
                    <Image source={pic} style={{ width: 250, height: 250 }} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {selectedServiceName : (state.selectedService || {name: 'NONE'}).name, ...state};
};

export default connect(mapStateToProps, {ping})(Module2)