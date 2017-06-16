import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ListView, TextInput, Button, TouchableNativeFeedback } from 'react-native';

import Dimensions from 'Dimensions';


export default class Loginsecond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    }
  }

  _pressButton() {

  }

  render() {
    return (
      <View style={styles.warp}>
        <View style={styles.top}>
          <View style={{padding: 4}}>
            <TouchableNativeFeedback onPress={this.props.back}>
              <Image style={{height: 16, width: 16}} source={require('./../../images/back.png')} />
            </TouchableNativeFeedback>
          </View>

          <Text style={{color: '#fff', fontSize: 16, marginLeft: 5}}>登录－密码</Text>
        </View>
        <View style={{marginTop: 80}}>
          <TextInput placeholder="请输入密码"
          secureTextEntry={true}
          style={{borderBottomColor: "#f05f48"}}
          onChangeText={(text) => this.state.password = text}
          style={{marginBottom: 50}}/>
        </View>

        <Button title="登录" color="#f05f48" onPress={this._pressButton} />
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
