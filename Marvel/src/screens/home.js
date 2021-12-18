import React,{useState,useEffect} from 'react';
import {View, FlatList, TouchableOpacity } from 'react-native';
import API from '../services/api'
import Card from '../components/film'
import Loadings from '../components/loading'
function App({ navigation }) {
  const [Data, setData] = useState([]);
  const [Loading,setLoading]=useState(true);
  useEffect(()=>{
    async function getData(){
        var films = await API.getFilms();
        for (let film of films.results) Data.push(film);
        setLoading(false);
    }
    getData();
  },[])
  goDetail=(id)=>{
    navigation.navigate('Details',{id,navigation})
  }
  const Item = ({ film }) => (
    <TouchableOpacity onPress ={() =>goDetail(film.id)}>
      <Card item={film}/>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => (
    <Item film={item} />
  );
  return (
    <View style={{ flex: 1}}>
      {Loading ? 
        <Loadings/>
      :
      <FlatList
        data={Data}
        renderItem={renderItem}
      />
    }
    </View>
  );
}
export default App;