import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoContextProvider from './services/TodoContext';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import AddTodoScreen from './screens/AddTodoScreen';


const Stack = createStackNavigator();
const App = () => {
  return (
    <TodoContextProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode='screen'>
          <Stack.Screen name='LoadingScreen' component={LoadingScreen} options={{ headerShown: false, }} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='AddTodoScreen' component={AddTodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoContextProvider>
  );
};

export default App;
