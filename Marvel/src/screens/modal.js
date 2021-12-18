import React,{} from 'react';
import {View,  Image, TouchableOpacity } from 'react-native';
import Close from '../components/closeButton'
import Label from '../components/label'
function App({navigation,route}) {
  return (
      <View style={{ flex: 1}}>
        <View style={{position:'absolute', top:20,right:20,zIndex:1}}>
            <TouchableOpacity onPress={() => navigation.navigate('Details',{id,navigation})}>
            <Close/>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#1F2C34',padding:25 }}>
            <Image 
            style={{height:500,width:'100%'}}
            source={{uri:route.params.cover}}></Image>
            <Label name={route.params.name} color='#fff' size={14}/>
        </View>
    </View>
  );
}
export default App;