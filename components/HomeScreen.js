import React from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

const HomeScreen = () => {
  const {user} = useAuth0();
  const {clearSession} = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };
  console.log('\nuser is: ', user);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={onPress} title="Log out" />
    </View>
  );
};

export default HomeScreen;
