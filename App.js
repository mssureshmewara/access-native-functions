/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
  var IS_LOCATION_SERVICE_ENABLED = false;
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state={
      IS_LOCATION_SERVICE_ENABLED: false
      }
  }
   componentDidMount() {
     this.checkLocactionServiceStatus();
  }
  async checkLocactionServiceStatus() {
    IS_LOCATION_SERVICE_ENABLED = await NativeModules.CheckLocationServiceIsEnabled.isLcationServiceEnabled();

    this.setState({IS_LOCATION_SERVICE_ENABLED: IS_LOCATION_SERVICE_ENABLED})
    console.log(this.state.IS_LOCATION_SERVICE_ENABLED);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native! </Text>
        <Text style={styles.instructions}>Example to check Android Locaction Service is enabled?</Text>
        <Text style={styles.instructions}>Locaction Service Status : { (this.state.IS_LOCATION_SERVICE_ENABLED).toString() }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
