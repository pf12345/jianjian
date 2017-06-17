import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  TouchableNativeFeedback
} from 'react-native';

import Dimensions from 'Dimensions';
import Cbtton from './../cbutton'



export default class Loginfirst extends Component {
  constructor() {
    super();
    this.state = {
      phone: ''
    }
  }


  _pressButton = () => {
    const navigator = this.props.navigator;
    if(this.props.phone) {
      if (navigator) {
        navigator.push({
          name: 'Loginsecond',
          index: 2
        })
      }
    }else{
      ToastAndroid.show('请输入手机号码', ToastAndroid.SHORT);
    }
  }

  componentWillMount() {
    this.setState({
      phone: this.props.phone
    })
  }

  render() {

    return (
      <View style={styles.warp}>
        <View style={styles.top} onPress={this.props.back}>
          <View style={{padding: 4}}>
            <TouchableNativeFeedback onPress={this.props.back}>
              <Image style={{height: 16, width: 16}} source={require('./../../images/back.png')} />
            </TouchableNativeFeedback>
          </View>
          <Text style={{color: '#fff', fontSize: 16, marginLeft: 5}}>注册－手机号</Text>
        </View>
        <View style={{marginTop: 80}}>
          <TextInput placeholder="请输入手机号码"
          style={{borderBottomColor: "#f05f48"}}
          keyboardType="numeric"
          value={this.state.phone}
          onChangeText={(text) => {
            this.props.setPhone(text)
            this.setState({
              phone: text
            })
          }}
          style={{marginBottom: 50}}/>
        </View>

        <Cbtton title="下一步" onPress={this._pressButton} ></Cbtton>
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
