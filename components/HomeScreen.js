import React from 'react';
import {View, Text, Button, Linking} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const HomeScreen = () => {
  const {user, clearSession} = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };
  console.log('\nuser is: ', user);

  const goToWebApp = () => {
    const url = 'http://localhost:4100';
    Linking.openURL(url).catch(err =>
      console.error('Failed to open URL:', err),
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={onPress} title="Log out" />
      <Button onPress={goToWebApp} title="Go to web app" />
    </View>
  );
};

export default HomeScreen;
