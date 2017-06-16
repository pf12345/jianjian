import React, { Component } from 'react';
import { Text, View, ToastAndroid } from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';


import MyScene from './login/MyScene';

export default class SimpleNavigationApp extends Component {
  constructor() {
    super()
    this.state = {
      navigators: [],
      route: ''
    };
  }


  render() {
    return (
      <Navigator
      initialRoute={{
        title: 'My Initial Scene',
        index: 0
      }}
      renderScene={(route, navigator) => <MyScene
        title={route.title}
        navigator={navigator}
        route={route}
        // Function to call when a new scene should be displayed
        onForward={ () => {
          const nextIndex = route.index + 1;
          navigator.push({
            title: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}

        // Function to call to go back to the previous scene
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
        />
      }
      />
    )
  }
}
