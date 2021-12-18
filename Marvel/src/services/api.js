import axios from 'react-native-axios'
import md5 from 'md5';

const host="https://gateway.marvel.com/v1/public/characters"
const PUBLIC_KEY = '80dd1c2dc2d99c4a7fcf65f6b047ad78';
const PRIVATE_KEY = '6162522c36f5fed350220f7517337f4cd8fbba03';
const ts = Number(new Date());
const md5s =md5(ts+PRIVATE_KEY+PUBLIC_KEY);
module.exports = {
    getFilms: () => axios({
        method:"GET",
        url :host+'?ts='+ts+'&orderBy=name&limit=10&apikey='+PUBLIC_KEY+'&hash='+md5s,
        headers: { 
            'Content-Type': 'application/json'
          }
        }).then((response) => {
            return response.data.data;
        }).catch((e)=>console.log(e)),

    getFilm: (id) => axios({
      method:"GET",
      url :host+ '/' + id +'?ts='+ts+'&orderBy=name&limit=10&apikey='+PUBLIC_KEY+'&hash='+md5s,
      headers: { 
          'Content-Type': 'application/json'
        }
      }).then((response) => {
          return response.data.data;
      }).catch((e)=>console.log(e)),

    getFilmByCategory: (url) => axios({
      method:"GET",
      url :url +'?ts='+ts+'&apikey='+PUBLIC_KEY+'&hash='+md5s,
      headers: { 
          'Content-Type': 'application/json'
        }
      }).then((response) => {
          return response.data.data;
      }).catch((e)=>console.log(e)),
  }