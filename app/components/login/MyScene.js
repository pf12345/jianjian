import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, BackHandler, ToastAndroid, TextInput} from 'react-native';

import  Loginfirst  from './loginfirst';
import  Loginsecond  from './loginsecond';

export default class MyScene extends Component {

  constructor() {
    super()
    this.state = {
      phone: '',
      password: ''
    }
  }


  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {

    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {

      //最近2秒内按过back键，可以退出应用。
      return false;
    }

    this.lastBackPressed = Date.now();

    if (this.props.route && this.props.route.index > 0) {
      this.props.navigator.pop();
    } else {
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    }

    return true;

  }

  _renderPage() {

    const navigator = this.props.navigator;

    if(this.props.route.index == 1) {
      return (
        <Loginsecond navigator={navigator} phone={this.state.phone} back={this.onBackAndroid}></Loginsecond>
      )
    }else {
      return (
        <Loginfirst navigator={navigator} phone={this.state.phone} back={this.onBackAndroid}></Loginfirst>
      )
    }


  }

  render() {
    return (
      <View>
        {this._renderPage()}

      </View>
    )
  }
}
