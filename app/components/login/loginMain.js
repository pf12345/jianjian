import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, TextInput, Button, ToastAndroid, TouchableHighlight } from 'react-native';

import Dimensions from 'Dimensions';
import Cbtton from './../cbutton'



export default class Loginmain extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      password: ''
    }
  }

  _goRegister() {
    const navigator = this.props.navigator;
    if (navigator) {
      navigator.push({
        name: 'Loginfirst',
        index: 1
      })
      this.props.clearData();
    }
  }

  render() {

    return (
      <View style={styles.warp}>
        <View style={{flexDirection:"column",alignItems:"center", marginTop: 50}}>
          <View style={{flex:1}}></View>
          <Image style={{height: 50, width: 50}} source={require('./../../images/logo.png')} />
          <View style={{flex:1}}></View>
        </View>

        <View style={{marginTop: 40, marginBottom: 20}}>
          <View style={styles.borderLine}></View>
          <TextInput placeholder="手机号"
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          value={this.state.phone}
          onChangeText={(text) => {
            this.setState({
              phone: text
            })
          }}/>
          <View style={styles.borderLine}></View>
          <TextInput placeholder="密码"
          secureTextEntry={true}
          value={this.props.password}
          underlineColorAndroid="transparent"
          onChangeText={(text) => {
            this.setState({
              password: text
            })
          }}/>
          <View style={styles.borderLine}></View>
        </View>
        <Cbtton style={{padding: 20}} title="登录" onPress={this.props.login}></Cbtton>
        <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
          <Text style={{color: '#f05f48', marginRight: 20}} onPress={this._goRegister.bind(this)}>新用户注册</Text>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  warp: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 20
  },
  borderLine: {
    width: Dimensions.get('window').width,
    backgroundColor: '#dadada',
    height: 1
  },
  top: {
    width: Dimensions.get('window').width,
    padding: 10,
    backgroundColor: '#f05f48',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row'
  }
})
