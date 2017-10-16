
import React, { Component } from 'react';
import {chooseService} from '../actions';
import { Image, View, Text, Button, StyleSheet } from 'react-native';
import {connect} from 'react-redux'

class Module1 extends Component {
    onPressLearnMore = () =>  this.props.chooseService(2, `Hello from Celtics, bro at ${new Date().toTimeString()}`);
    render() {
        let pic = require('./resources/celtic.jpg');
        return (
            <View>
                <View>
                    <Text>
                        It's Celtic bro!
                    </Text>
                    <Image source={pic} style={{ width: 250, height: 250 }} />
                    <Button onPress={this.onPressLearnMore.bind(this)}
                            title="Press on me"
                            color="#841584"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps, {chooseService})(Module1)