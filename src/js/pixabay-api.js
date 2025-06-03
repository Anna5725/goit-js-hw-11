//функція getImagesByQuery(query) для виконання HTTP-запитів
import axios from 'axios';

const API_KEY = '50600363-124150c1580125848cace6785';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query){
const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
};
return axios.get (BASE_URL, {params}).then (response=>response.data);
}