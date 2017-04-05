import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ToolbarAndroid,
  View
} from 'react-native';

export default class Second extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <ToolbarAndroid
                    title="Second"
                    style={styles.toolbar}
                    />
                <Text style={styles.text}>
                    Hello from second component!
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fc4300',
        flex: 1
    },
    text: {
        fontSize: 40,
        textAlign: 'center'
    },
    toolbar: {
        height: 60,
        backgroundColor: 'lightblue',
        marginBottom: 30
    }
});