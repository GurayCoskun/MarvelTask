import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {  Image,SafeAreaView} from 'react-native';
import Router from './src/navigation/router'
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
          <Router/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}