import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ListView, TextInput, Button, TouchableNativeFeedback } from 'react-native';

import Dimensions from 'Dimensions';
import Cbtton from './../cbutton'


export default class Loginsecond extends Component {
  constructor(props) {
    super(props);
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

          <Text style={{color: '#fff', fontSize: 16, marginLeft: 5}}>注册－密码</Text>
        </View>
        <View style={{marginTop: 80}}>
          <TextInput placeholder="请输入密码"
          secureTextEntry={true}
          value={this.props.password}
          style={{borderBottomColor: "#f05f48"}}
          onChangeText={(text) => this.props.setPassword(text)}
          style={{marginBottom: 50}}/>
        </View>

        <Cbtton title="注册" color="#f05f48" onPress={this.props.register} ></Cbtton>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  warp: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    padding: 20,
    backgroundColor: '#fff'
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
