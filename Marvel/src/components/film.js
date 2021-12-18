import React,{} from 'react';
import STYLES from '../styles/card'
import {  Text, View,Image} from 'react-native';
export default function App(props) {
    var path=props.item.thumbnail.path;
    var extension = props.item.thumbnail.extension;
    return (
        <View>
            <View style={STYLES.imageWrapper}>
            <Image
                style={STYLES.theImage}
                source={{
                uri: path + '/detail.' + extension,
                }}
            />
            </View>
            <View style={STYLES.nameContainer}>
                <Text style={STYLES.name}>{props.item.name}</Text>
            </View>
        </View>
  );
}
