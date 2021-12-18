import React,{useState,useEffect} from 'react';
import { Text,View,TextInput,StyleSheet} from 'react-native';
function App() {
  return (
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{width:'85%'}}>
          <TextInput 
              style={styles.input}
              autoCapitalize="none" returnKeyType={"next"} 
              secureTextEntry={false}
              placeholder='Search...' 
            />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.name}>
                    Cancel
                </Text>
           </View>
      </View>
    
  );
}
const styles = StyleSheet.create({
    input:{
        backgroundColor:'#fff',
        borderRadius:20
    },
    name:{
        color:'#ED1B24',        
    }
  });
export default App;