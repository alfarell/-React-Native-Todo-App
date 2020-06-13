import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import { Logo } from './components/Logo';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='float'>
        <Stack.Screen name='Loading' component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{
          headerTitle: () => {
            return (
              <View style={{ width: 120 }}>
                <Logo fontSize={14} circleSize={{ height: 25, width: 25 }} />
              </View>
            );
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
