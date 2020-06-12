import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='float'>
        <Stack.Screen name='Loading' component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
