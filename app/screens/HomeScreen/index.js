
import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Build somthing awesome</Text>
            </View>
        );
    }
}