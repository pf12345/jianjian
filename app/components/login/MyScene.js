import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, BackAndroid, ToastAndroid} from 'react-native';

export default class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
  }
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {

    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {

      //最近2秒内按过back键，可以退出应用。

      return false;

    }

    this.lastBackPressed = Date.now();

    console.warn(this.props.route.index)

    if (this.props.route && this.props.route.index > 0) {
      this.props.navigator.pop();
    } else {
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    }

    return true;

  }

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>点我进入下一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>点我返回上一场景</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
