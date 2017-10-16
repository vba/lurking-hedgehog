import { Text, View, StyleSheet} from 'react-native';

import React from 'react';

const styles = StyleSheet.create({
    logo: {
        // flex: 1,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        marginBottom: 10,
        elevation: 2,
        position: 'relative',
        borderBottomColor: '#47315a',
        borderBottomWidth: 1
    },
    logoContainer: {
        // flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    logoContainerTop: {
        paddingTop: 7,
        width: 70,
        height: 30,
        backgroundColor: '#ffd126',
        textAlign: 'center',
        color: 'white'
    },
    logoContainerBottom: {
        width: 70,
        height: 25,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black'
    },
    logoOptionsContainer: {
        flexDirection: 'row',
        paddingRight: 10,
        marginTop: 15,
    },
    logoOption: {
        width: 30,
        height: 30,
        marginLeft: 5,
        backgroundColor: '#fff885',
    },
    titleContainer: {
        marginTop: 15,
        fontWeight: 'bold',
    }
});

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.logo}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoContainerTop}>Easy</Text>
                    <Text style={styles.logoContainerBottom}>Hedgehog</Text>
                </View>
                <View>
                    <Text style={styles.titleContainer}>Zoe ▼</Text>
                </View>
                <View style={styles.logoOptionsContainer}>
                    <Text style={styles.logoOption}/>
                    <Text style={styles.logoOption}/>
                </View>
            </View>
        );
    }
}