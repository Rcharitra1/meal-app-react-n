import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import {createStore, combineReducers} from 'redux'
import {enableScreens} from 'react-native-screens';
enableScreens();
import {Provider} from 'react-redux';

import mealsReducer from './store/reducers/meals';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();



const store = createStore(combineReducers({
  meals: mealsReducer
}));

const fetchFonts = ()=>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
 

  if(!fontLoaded)
  {
    return <AppLoading startAsync={fetchFonts} onFinish={()=> setFontLoaded(true)} onError={(err)=> console.log(err)}/>
  }
  console.disableYellowBox=true;
  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  console.ignoredYellowBox = [
    'console.disableYellowBox has been deprecated and will be removed in a future release. Please use LogBox.ignoreAllLogs(value) instead.',
  ];

  return (
   
    <Provider store={store}>
    <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
