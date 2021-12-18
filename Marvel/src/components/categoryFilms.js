import React,{useState,useEffect} from 'react';
import STYLES from '../styles/category'
import {  Text, View,Image, TouchableOpacity} from 'react-native';
import API from '../services/api'
import Loadings from '../components/loading'
export default function App(props) {
    const [cover,setCover]=useState('');
    const [Loading,setLoading]=useState(true);
    const nav= props.nav;
    var name=props.item.name;
    useEffect(()=>{
        async function getData(){
            var film = await API.getFilmByCategory(props.item.resourceURI);
            if(film.results[0].thumbnail)
            setCover(film.results[0].thumbnail.path + '/detail.' + film.results[0].thumbnail.extension);
            else setCover('https://upload.wikimedia.org/wikipedia/commons/7/71/Unknown_location_in_Germany.png')
            setLoading(false);
        }
        getData();
      },[])
    return (
        <View>
            {Loading ? <Loadings/> : 
            <View style={{marginTop:10,width:130}}>
                <TouchableOpacity onPress={() => nav.navigate('MyModal',{cover,nav,name})}>
                <View style={STYLES.imageWrapper}>
                    <Image
                        style={STYLES.theImage}
                        source={{
                        uri:cover,
                        }}
                    />
                </View>
                <Text style={STYLES.name}>{props.item.name}</Text>
                </TouchableOpacity>
            </View>
        }
        </View>
  );
}
