import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth0} from 'react-native-auth0';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    try {
      const credentials = await authorize({
        scope: 'openid profile email',
        // audience:
      });
      console.log(credentials);
      navigation.navigate('Home');
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
