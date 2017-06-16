import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ListView, TextInput, Button } from 'react-native';

import Dimensions from 'Dimensions';


export default class Loginsecond extends Component {
  constructor(props) {
    super(props);
  }

  _pressButton() {

  }

  render() {
    return (
      <View style={{padding: 20, marginTop: 30}}>
        <TextInput placeholder="请输入密码"
        onChangeText={(text) => this.props.phone = text}
        style={{marginBottom: 50}}/>
        <Button title="下一步" color="#f05f48" onPress={this._pressButton} />
      </View>

    );
  }
}
