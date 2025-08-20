import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  hideLoader,
  renderGallery,
  showLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const refs = {
  form: document.querySelector('.form'),
  buttonInput: document.querySelector('.js-button-search'),
  inputSearch: document.querySelector('.js-input-search'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.js-loader'),
};

export const { form, buttonInput, inputSearch, galleryList, loader } = refs;

form.addEventListener('submit', e => {
  e.preventDefault();
  showLoader();

  const usersSearchValue = e.target.elements['search-text'].value.trim();

  if (!usersSearchValue) {
    hideLoader();
    iziToast.show({
      message: 'Some to searce.',
      position: 'topRight',
      backgroundColor: '#5c1e18',
      messageColor: '#bcbcbc',
    });
    return;
  }

  clearGallery();

  getImagesByQuery(usersSearchValue)
    .then(images => {
      if (!images.length) {
        iziToast.show({
          message: `Not found "${usersSearchValue}" any result.`,
          position: 'topRight',
          backgroundColor: '#e74c3c',
          messageColor: '#fff',
        });
        return;
      }
      renderGallery(images);
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!error',
        backgroundColor: '#e74c3c',
        messageColor: '#fff',
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
});