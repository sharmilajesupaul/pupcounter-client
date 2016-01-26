'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import Login from './src/components/login'
const styles = StyleSheet.create({
  nav: {
    flex: 1
  }
});


class Pupcounter extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.nav}
      initialRoute={{
        component: Login,
        title: 'Pupcounter',
        passProps: { myProp: 'foo' }
      }}
      />
    );
  }
}

AppRegistry.registerComponent('Pupcounter', () => Pupcounter);