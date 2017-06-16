import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ListView, TextInput, Button } from 'react-native';

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
    if (navigator) {
      navigator.push({
        name: 'Loginsecond',
        index: 1
      })
    }
  }

  render() {
    return (
      <View style={{padding: 20, marginTop: 30}}>
        <TextInput placeholder="请输入手机号码"
        style={{borderBottomColor: "#f05f48"}}
        onChangeText={(text) => this.state.phone = text}
        style={{marginBottom: 50}}/>
        <Button title="下一步" color="#f05f48" onPress={this._pressButton} />
      </View>

    );
  }
}
