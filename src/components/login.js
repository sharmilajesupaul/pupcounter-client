import React, {
  View,
  Component,
  Text,
  StyleSheet
} from 'react-native';

import FBSDKLogin, {
  FBSDKLoginButton
} from 'react-native-fbsdklogin';

const Login = React.createClass({
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

const styles = StyleSheet.create({
	 container: {
    flex: 1,
    paddingTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
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

module.exports = Login;