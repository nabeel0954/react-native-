import React from 'react';
import Inputs from './inputs.js';
import {StyleSheet } from 'react-native'

const App = () => {
   return (
      <Inputs />
   )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
