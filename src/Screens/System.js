import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserLogin() {
    return (
        <View style={styles.container}>
            <View style={styles.registerC}><Text>Sell Blood</Text></View>
            <View style={styles.searchS}><Text>Search Seller</Text></View>
            <View style={styles.about}><Text>About</Text></View>
            <View style={styles.profileU}><Text>Profile</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    registerC: {
        width: 90
    },
    about: {
        width: 80,
        marginLeft: 10
    },
    profileU: {
        width: 130
    },
    searchS: {
        width: 90
    }
})