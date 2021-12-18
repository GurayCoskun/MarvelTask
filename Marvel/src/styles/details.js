import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
    theImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    imageWrapper:{
        height: 350,
        width: "100%",
        overflow : "hidden"
    },
    information:{
        padding:10,
    },
    back:{
        position:'absolute',
        top:20,
        left:0
    }
})