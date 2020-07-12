import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  { DeviceInformation } from './DeviceInformation';

const Stack = createStackNavigator()
export default function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DeviceInformation" component={DeviceInformation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}