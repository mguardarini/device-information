import * as React from 'react'
import { Provider } from 'react-redux'
import  NavigationScreen from './NavigationScreen';
import initStore from '../store'

const store = initStore()

export default () => (
  <Provider store={store}>
    <NavigationScreen />
  </Provider>
)
