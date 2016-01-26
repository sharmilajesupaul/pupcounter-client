/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import FBSDKLogin, {
  FBSDKLoginButton
} from 'react-native-fbsdklogin';

const styles = StyleSheet.create({
  nav: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

const Main =  React.createClass({
  render () {
    return (<View style={styles.container}><Text style={styles.welcome}> hi </Text></View>);
  }
});

var Login = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <FBSDKLoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              alert('Error logging in.');
            } else {
              if (result.isCancelled) {
                alert('Login cancelled.');
              } else {
                alert('Logged in.');
              }
            }
          }}
          onLogoutFinished={() => alert('Logged out.')}
          readPermissions={[]}
          publishPermissions={['publish_actions']}/>
      </View>
    );
  }
});

class AwesomeProject extends Component {
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
