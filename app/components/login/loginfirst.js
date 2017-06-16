import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ListView, TextInput, Button, ToastAndroid } from 'react-native';

import Dimensions from 'Dimensions';



export default class Loginfirst extends Component {
  constructor() {
    super();
    this.state = {
      phone: ''
    }
  }


  _pressButton = () => {
    const navigator = this.props.navigator;
    if(this.state.phone) {
      if (navigator) {
        navigator.push({
          name: 'Loginsecond',
          index: 1
        })
      }
    }else{
      ToastAndroid.show('请输入手机号码', ToastAndroid.SHORT);
    }
  }

  render() {
    return (
      <View style={styles.warp}>
        <View style={styles.top} onPress={this.props.back}>
          <Text style={{color: '#fff', fontSize: 16, marginLeft: 5}}>登录－手机号</Text>
        </View>
        <View style={{marginTop: 80}}>
          <TextInput placeholder="请输入手机号码"
          style={{borderBottomColor: "#f05f48"}}
          onChangeText={(text) => this.state.phone = text}
          style={{marginBottom: 50}}/>
        </View>

        <Button title="下一步" color="#f05f48" onPress={this._pressButton} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  warp: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    padding: 20
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
