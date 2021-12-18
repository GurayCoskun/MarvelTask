import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
    theImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    imageWrapper:{
        height:200,
        width: 120,
        overflow : "hidden"
    },
    name:{
        textAlign:'center',
        color:'#fff',
        maxWidth:120
    }
})