import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
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
        flex: 1,
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 26
    }
});