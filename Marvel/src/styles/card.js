import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
    theImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    imageWrapper:{
        height: 200,
        width: "100%",
        overflow : "hidden"
    },
    nameContainer:{
        position: 'absolute',
        top:'60%', 
        left: '5%', 
        right: '50%', 
        bottom: 0,
        height:40,
        backgroundColor:'#fff'
    },
    name:{
        fontWeight:'bold', 
        fontSize:15,
        textAlign:'center',
        padding:10,
        color:'#000'
    }
})