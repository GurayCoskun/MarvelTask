import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home'
import Detail from '../screens/detail'
import Modal from '../screens/modal'
import Logo from '../components/logo'
import Search from '../components/search'
import Cancel from '../components/cancel'
import SearchScreen from '../screens/search'
import { TouchableOpacity } from 'react-native';
const Stack = createNativeStackNavigator();
class TitleLogo extends Component{
  render(){
      return( 
          <Logo/>
      )
  }
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} 
          options={({ navigation }) => ({ 
            headerTitle: props => <TitleLogo {...props} />, 
            headerTitleAlign:'center',
            headerRight: props =><TouchableOpacity onPress={() => navigation.navigate('Search')}><Search/></TouchableOpacity>, 
            headerStyle: {
              backgroundColor: '#0C0E0F',
            }, })}
        />
        <Stack.Screen name="Details" component={Detail} options={{headerShown:false}}/>
        <Stack.Screen name="MyModal" component={Modal} options={{
            headerShown: false,
            gestureEnabled:true
        }} />
        <Stack.Screen name="Search" component={SearchScreen} 
          options={({ navigation }) => ({ 
            headerLeft: props => <TouchableOpacity onPress={() => navigation.navigate('Home')}><Cancel/></TouchableOpacity> ,
            headerBackVisible:false,
            headerTitle:props=>{},
            headerTitleAlign:'left',
            headerStyle: {
              backgroundColor: '#0C0E0F',
            }, })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
