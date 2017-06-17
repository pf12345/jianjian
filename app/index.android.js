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
     this.state = {
       user: {
         _id: '',
         nickname: '',
         avatar: ''
       }
     }
   }

   _renderPage() {
     if(this.state.user._id) {
       return(
         <Main></Main>
       )
     }else {
       return(
         <SimpleNavigationApp setUser={this._setUser.bind(this)}></SimpleNavigationApp>
       )
     }
   }

   _setUser() {
     this.setState({
       user: {
         _id: '123123'
       }
     })
   }

   render() {
     return (
      <View style={styles.warp}>
        {this._renderPage()}
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
