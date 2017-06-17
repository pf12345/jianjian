import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, BackHandler, ToastAndroid, TextInput} from 'react-native';

import  Loginfirst  from './loginfirst';
import  Loginsecond  from './loginsecond';
import  Loginmain  from './loginMain';

export default class MyScene extends Component {

  constructor() {
    super()
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


  _setPhone(value) {
    this.props.setPhone(value);
  }

  _setPassword(value) {
    this.props.setPassword(value);
  }

  _login() {
    this.props.login();
  }

  _register() {
    this.props.register();
  }

  _clearData() {
    this.props.clearData();
  }

  _renderPage() {

    const navigator = this.props.navigator;

    if(this.props.route.index == 2) {
      return (
        <Loginsecond navigator={navigator} password={this.props.password} back={this.onBackAndroid} setPassword={this._setPassword.bind(this)} register={this._register.bind(this)}></Loginsecond>
      )
    }else if(this.props.route.index == 1){
      return (
        <Loginfirst navigator={navigator} phone={this.props.phone} back={this.onBackAndroid.bind(this)} setPhone={this._setPhone.bind(this)}></Loginfirst>
      )
    }else{
      return (
        <Loginmain navigator={navigator} phone={this.props.phone} password={this.props.password}
        setPhone={this._setPhone.bind(this)}
        setPassword={this._setPassword.bind(this)}
        clearData={this._clearData.bind(this)}
        login={this._login.bind(this)}></Loginmain>
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
