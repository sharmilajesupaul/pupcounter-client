import React, {View, Component, Text, StyleSheet} from 'react-native';

class Login extends Component {
  render () {
    return (
    	<View style={styles.container}>
    		<Text style={styles.welcome}> hi </Text>
    	</View>
    );
  }
};

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