import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const LoginScreen = ({navigation}) => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={onPress} />
    </View>
  );
};

export default LoginScreen;
