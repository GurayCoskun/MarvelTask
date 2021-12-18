import React,{} from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';
export default function App(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{props.name}</Text>
            <Image source={require('../assets/right.png')} />
        </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:25
    },
    header:{
        color:'#fff',
        fontSize:20
    }
  
  });