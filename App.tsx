import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import {useAuth0, Auth0Provider} from 'react-native-auth0';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Auth0Provider
        domain={'dev-m6cct5o8oexmffxu.us.auth0.com'}
        clientId={'cQVvYuq3H8iiROXl8VwYBJzCIYaCUnvO'}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </Auth0Provider>
    </NavigationContainer>
  );
}

export default App;
