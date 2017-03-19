import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  ToolbarAndroid,
  View
} from 'react-native';

export default class First extends Component {
    constructor(props) {
        super(props);
    }

    goToSecond() {
        this.props.navigator.push({
            id: 'second'
        });
    }

    render() {
        return(
            <View style={styles.container}>
                <ToolbarAndroid 
                    style={styles.toolbar}
                    title="Navigation Example" 
                    />
                <Text style={styles.text}>
                    Hello from first component!
                </Text>
                <Button 
                    title="Go" 
                    onPress={this.goToSecond.bind(this)}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 26,
        paddingBottom: 20
    },
    toolbar: {
        height: 60,
        backgroundColor: '#003618',
        marginBottom: 30
    }
});