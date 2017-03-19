/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  View,
} from 'react-native';

import First from './first';
import Second from './second';

export default class ReactNativeNavigator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'first'}}
        renderScene={this.navigatorRenderScene} 
        />
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;

    switch(route.id) {
      case 'first':
        return (<First navigator={navigator} />);
      case 'second':
        return (<Second navigator={navigator} />);
    }
  }
}

AppRegistry.registerComponent('ReactNativeNavigator', () => ReactNativeNavigator);
