import React, {useEffect} from 'react';
import {View, Text, Button, Linking} from 'react-native';

const LoginScreen = ({navigation}) => {
  const auth0Domain = 'dev-sncb132t.us.auth0.com';
  const clientId = 'goRWbzgluLdirz8KLDc5ADBTyT99sJcO';
  const redirectUri =
    'com.auth0.neondevtech.auth0://dev-sncb132t.us.auth0.com/ios/com.auth0.neondevtech/callback';

  const authUrl =
    `https://${auth0Domain}/authorize` +
    '?scope=openid%20profile%20email' +
    '&response_type=code' +
    `&client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}`;

  useEffect(() => {
    const handleAuthRedirect = async event => {
      // Check if the incoming URL matches the redirect URI
      if (event.url.startsWith(redirectUri)) {
        // Handle the redirect URL here
        // You can extract the necessary information from the URL
        // For example, extract the code parameter from the URL

        // After handling the redirect, navigate to the Home screen
        navigation.navigate('Home');
      }
    };

    // Add an event listener to listen for incoming URLs
    Linking.addEventListener('url', handleAuthRedirect);

    // Remove the event listener when the component unmounts
    return () => {
      Linking.removeEventListener('url', handleAuthRedirect);
    };
  }, [navigation]);

  const onPress = async () => {
    try {
      // Open the system browser with the Auth0 login URL
      await Linking.openURL(authUrl);
    } catch (e) {
      console.error('Error opening Auth0 login:', e);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="Login with Auth0" onPress={onPress} />
    </View>
  );
};

export default LoginScreen;
