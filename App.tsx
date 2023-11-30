import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Auth0Provider
      domain={'dev-m6cct5o8oexmffxu.us.auth0.com'}
      clientId={'vXA93ALYnQWKQP1KHJeHJ1tofhlL3T2N'}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0Provider>
  );
}

export default App;
