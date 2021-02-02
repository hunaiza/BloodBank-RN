import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AdminLogin() {
    return (
        <View style={styles.container}>
            <View style={styles.bloodD}><Text>Blood Donors</Text></View>
            <View style={styles.registerC}><Text>Registered Customers</Text></View>
            <View style={styles.totalB}><Text>Same blood groups</Text></View>
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
    bloodD: {
        width: 130,
        marginLeft: 10
    },
    totalB: {
        width: 130
    }
})