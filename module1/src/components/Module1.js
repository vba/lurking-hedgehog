
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {chooseService} from '../actions';
import { Image, View, Text, Button, StyleSheet } from 'react-native';
import {connect} from 'react-redux'

class Module1 extends Component {
    onPressLearnMore = () =>  this.props.chooseService(2, `Hello from Celtics, bro at ${new Date().toTimeString()}`);
    render() {
        // const { region } = this.props;
        // console.log(region);
        return (
            <View>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 48.856614,
                            longitude: 2.3522219,
                            latitudeDelta: 0.01922,
                            longitudeDelta: 0.00921,
                        }}
                    />
                </View>
                <Button onPress={this.onPressLearnMore.bind(this)}
                        title="Press on me"
                        color="#841584"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        height: 320,
        width: 350,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps, {chooseService})(Module1)