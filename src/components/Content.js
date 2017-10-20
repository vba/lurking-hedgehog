import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {pushNearestGasStations, pushNearestServices} from '../actions';
import {View, Button, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux'
import carPositionPic from './assets/car-placeholder.png';
import parkingPic from './assets/parking.png';
import gasPic from './assets/gasoline-pump.png';
import servicePic from './assets/repair-service.png';
import _ from 'underscore';
import {getRandomCoordinates} from "../tools/index";


class Content extends Component {
    centerOffset = {x: -42, y: -60};
    anchor = {x: 0.84, y: 1};

    constructor(props = {}, context = {}) {
        super(props, context);
        this.props.gasStations = [];
    }
    getRandomPoints = (center) => _.range(0, 11).map(() => getRandomCoordinates(center));

    onShowGasStations = () => {
        const stations =  this.getRandomPoints(this.props.me);
        this.props.pushNearestGasStations(stations);
    };
    onShowServices = () => {
        const services =  this.getRandomPoints(this.props.destination);
        this.props.pushNearestServices(services);
    };
    renderServices = () => {
        const services = (this.props.services || this.getRandomPoints(this.props.me));
        return (services).map((x, i) => {
            return <MapView.Marker
                key={i}
                coordinate={x}
                centerOffset={this.centerOffset}
                anchor={this.anchor}>
                <Image source={servicePic} style={styles.marker} />
            </MapView.Marker>
        });
    };
    renderGasStations = () => {
        return (this.props.gasStations || []).map((x, i) => {
            return <MapView.Marker
                key={i}
                coordinate={x}
                centerOffset={this.centerOffset}
                anchor={this.anchor}>
                <Image source={gasPic} style={styles.marker} />
            </MapView.Marker>
        });
    };
    renderMyPosition = () => {
        return (
            <MapView.Marker
                coordinate={this.props.me}
                centerOffset={this.centerOffset}
                anchor={this.anchor}>
                <Image source={carPositionPic} style={styles.marker}/>
            </MapView.Marker>);
    };
    renderDestination = () => {
        return (
            <MapView.Marker
                coordinate={this.props.destination}
                centerOffset={this.centerOffset}
                anchor={this.anchor}>
                <Image source={parkingPic} style={styles.marker} />
            </MapView.Marker>);
    };
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            ...this.props.me,
                            latitudeDelta: 0.01922,
                            longitudeDelta: 0.00921,
                        }}>
                        { this.renderMyPosition() }
                        { this.renderDestination() }
                        { this.renderGasStations() }
                        { this.renderServices() }
                    </MapView>
                </View>
                <Button onPress={this.onShowServices}
                        title="Show nearest services"
                        color="green"/>
                <Button onPress={this.onShowGasStations}
                        title="Show nearest gas stations"
                        color="#841584"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        // ...StyleSheet.absoluteFillObject,
        height: 410,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'center',
        // justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    marker: {
        width: 36,
        height: 36,
    }
});

const mapStateToProps = state => {
    return {
        ...state.radiusPoints,
        me: {
            latitude: 48.85698758522917,
            longitude: 2.3536672443151474,
        },
        destination: {
            latitude: 48.86208387947027,
            longitude: 2.3449205607175827,
        }
    }
};

export default connect(mapStateToProps, {pushNearestGasStations, pushNearestServices})(Content)
// export default Content