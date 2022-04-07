import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/Navigator/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from './src/Navigator/TabNavigator';

const App = () => {
  return (
    <>
      <NavigationContainer

      >
        {/* <StackNavigator /> */}
        <TabNavigator />
      </NavigationContainer>
    </>
  )
}

export default App;