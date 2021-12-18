import React,{} from 'react';
import {Text} from 'react-native';
export default function App(props) {
    return (
        <Text style={{color:props.color,fontSize:props.size,fontWeight:'500',marginTop:5}}>{props.name}</Text>
  );
}
