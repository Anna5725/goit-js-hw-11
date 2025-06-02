// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації

import {getImagesByQuery} from './pixabay-api.js';
import {createGallery, clearGallery,  showLoader,  hideLoader} from './render-functions.js';

const form = document.querySelector('.form');
form.addEventListener('submit', async e =>{
    e.preventDefault();

const query = e.target.elements['search-text'].value.trim();

if(!query){
    iziToast.Toast.warning({
        message: 'Please enter a search query.', 
        position: 'topRight'
    });
    return;
}
clearGallery();
showLoader();

try{
    const data = await getImagesByQuery(query);
    if(data.hits.length === 0){
        iziToast.error({
            message:'Sorry, there are no images matching your search query.',
            position: 'topRight',
        });
    } else {
      createGallery(data.hits);
    }
} catch (error){
    iziToast.error({
        message:'Something went wrong. Please try again later.',
        position: 'topRight',
    });
} finally {
    hideLoader();
}
});