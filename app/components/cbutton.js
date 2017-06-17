import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import Dimensions from 'Dimensions';


export default class Cbutton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={this.props.style}>
      <TouchableHighlight style={styles.touchableHighlight} underlayColor="#ec3619" onPress={this.props.onPress}>
        <Text style={{color: '#fff', textAlign:'center',justifyContent: 'center'}}>{this.props.title}</Text>
      </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  touchableHighlight: {
    width: Dimensions.get('window').width - 40,
    height: 40,
    backgroundColor:'#f05f48',
    borderRadius: 5,
    alignItems:'center',
    justifyContent: 'center'
  }
})
