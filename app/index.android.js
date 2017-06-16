/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';

 import {
   AppRegistry,
   StyleSheet,
   View,
   Text,
   Image
 } from 'react-native';

 import Main from './components/main'
 import SimpleNavigationApp from './components/login'

 import Dimensions from 'Dimensions'

 class app extends Component {
   constructor() {
     super()
   }

   render() {
     return (
      <View style={styles.warp}>
        <SimpleNavigationApp></SimpleNavigationApp>
      </View>

     );
   }
 }
 const styles = StyleSheet.create({
   warp: {
     width: Dimensions.get('window').width,
     height: Dimensions.get('window').height
   }
 });
AppRegistry.registerComponent('app', () => app);
