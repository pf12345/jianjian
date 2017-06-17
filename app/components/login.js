import React, { Component } from 'react';
import { Text, View, ToastAndroid } from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';


import MyScene from './login/MyScene';

export default class SimpleNavigationApp extends Component {
  constructor() {
    super()
    this.state = {
      navigators: [],
      route: '',
      phone: '',
      password: ''
    };
  }

  _setPhone(phone) {
    this.setState({
      phone: phone
    })
  }

  _setPassword(password) {
    this.setState({
      password: password
    })
  }

  _login() {
    // console.warn((this.state.phone));
    // console.warn((this.state.password));
    this.props.setUser()
  }

  _register() {
    console.warn((this.state.phone));
    console.warn((this.state.password));
  }

  _clearData() {
    this.setState({
      phone: '',
      password: ''
    })
  }

  render() {
    return (
      <Navigator
      initialRoute={{
        title: 'My Initial Scene',
        index: 0
      }}
      renderScene={(route, navigator) => <MyScene
        title={route.title}
        navigator={navigator}
        route={route}
        phone={this.state.phone}
        password={this.state.password}
        // Function to call when a new scene should be displayed
        onForward={ () => {
          const nextIndex = route.index + 1;
          navigator.push({
            title: 'Scene ' + nextIndex,
            index: nextIndex,
          });
        }}
        login={this._login.bind(this)}
        register={this._register.bind(this)}
        setPhone={this._setPhone.bind(this)}
        setPassword={this._setPassword.bind(this)}
        clearData={this._clearData.bind(this)}

        // Function to call to go back to the previous scene
        onBack={() => {
          if (route.index > 0) {
            navigator.pop();
          }
        }}
        />
      }
      />
    )
  }
}
