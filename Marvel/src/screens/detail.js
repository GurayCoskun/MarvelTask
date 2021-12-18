import React,{useState,useEffect} from 'react';
import { View, TouchableOpacity,Image,FlatList, ScrollView } from 'react-native';
import STYLES from '../styles/details'
import API from '../services/api'
import Label from '../components/label'
import Card from '../components/categoryFilms'
import Loadings from '../components/loading'
import Link from '../components/link'
import Back from '../components/backButton'
function App({route,navigation}) {
  const{id}=route.params;
  const [Data, setData] = useState([]);
  const [Comics, setComics] = useState([]);
  const [Series, setSeries] = useState([]);
  const [Stories, setStories] = useState([]);
  const [Loading,setLoading]=useState(true);
  const [cover,setCover]=useState('');
  useEffect(()=>{
    async function getData(){
        var film = await API.getFilm(id);
        setData(film.results[0]);
        setCover(film.results[0].thumbnail.path + '/detail.' + film.results[0].thumbnail.extension);
        setComics(film.results[0].comics.items);
        setSeries(film.results[0].series.items);
        setStories(film.results[0].stories.items);
        setLoading(false);
    }
    getData();
  },[])

  const renderItem = ({ item }) => (
      <Card item={item} nav={navigation}/>
  );
  return (
    <View style={{flex:1,backgroundColor:'#1F2C34'}}>
      {Loading ? <Loadings/>:
      <ScrollView>
      <View style={STYLES.imageWrapper}>
       <Image
           style={STYLES.theImage}
           source={{
             uri:cover,
           }}
       />
       </View>
       <View style={STYLES.back}>
         <TouchableOpacity onPress={() => route.params.navigation.navigate('Home')}>
           <Back/>
         </TouchableOpacity>
       </View>
       <View style={STYLES.information}>
         <Label name='NAME' color='#ED1B24' size={14}/>
         <Label name={Data.name} color='#fff' size={18}/>
         <Label name='DESCRIPTION' color='#ED1B24' size={14}/>
         <Label name={Data.description} color='#fff' size={18}/>
         <View style={{marginTop:10}}>
           <Label name='Comics' color='#ED1B24' size={14}/>
           <FlatList
             horizontal={true}
             data={Comics}
             renderItem={renderItem}
           />
         </View>
         <View style={{marginTop:10}}>
           <Label name='Series' color='#ED1B24' size={14}/>
           <FlatList
             horizontal={true}
             data={Series}
             renderItem={renderItem}
           />
         </View>
         <View style={{marginTop:10}}>
           <Label name='Stories' color='#ED1B24' size={14}/>
           <FlatList
             horizontal={true}
             data={Stories}
             renderItem={renderItem}
           />
         </View>
         <View style={{marginTop:10}}>
           <Label name='RELATED LINKS' color='#ED1B24' size={14}/>
           <Link name='Detail'/>
           <Link name='Wiki'/>
           <Link name='Comiclink'/>
         </View>
       </View>
     </ScrollView>
      }
      
    </View>
  );
}

export default App;