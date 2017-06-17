/**
 * Sample React Native App
 * 包含所有登录成功后主界面
 * @flow
 */

 import React, { Component } from 'react';

 import {
   StyleSheet,
   View,
   Text,
   Image
 } from 'react-native';

 import Dimensions from 'Dimensions'

 import Navigator from './main/TabNavigator'
 import Home from './main/home'
 import Chat from './main/chat'
 import Friends from './main/friends'
 import User from './main/user'

 import query from './query'

 // var socket = query.socket();
 //
 // socket.on('connect', function() {
 //   console.warn('connected')
 //   //andrioid111用户连接socket
 //   socket.emit('new user', 'andrioid111');
 //
 //   socket.on('toandrioid111', function(data) {
 //     console.warn(JSON.stringify(data));
 //   })
 // })

 export default class Main extends Component {
   constructor() {
     super()
     this.state = {
       selectedTab: 'position',
     };
   }
   _renderPage() {

     switch (this.state.selectedTab) {
        case 'position':
          return (<Home></Home>)
          break;
        case 'user':
          return (<User></User>)
          break;
        case 'chat':
          return (<Chat></Chat>)
          break;
        case 'friend':
          return (<Friends></Friends>)
          break;
       default:

     }
   }
   _navigaterPress(selected){
     this.setState({
       selectedTab: selected
     })
   }
   render() {
     return (
      <View style={styles.warp}>
        <View>
          {this._renderPage()}
        </View>
        <Navigator chatNum="5" onItemPress={this._navigaterPress.bind(this)} initSelected="position"></Navigator>
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
