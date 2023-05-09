import { registerEscAndButtonListeners } from './util.js';
import { validateForm } from './validator.js';
import {
  openUploadSuccess,
  openUploadError
} from './network-message-controller.js';
import { cleanEffect } from './effects-controller.js';
import { cleanScale } from './scale-controller.js';

const BACKEND_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const uploadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!validateForm()) {
    return;
  }
  const formData = new FormData(evt.target);
  fetch(
    BACKEND_URL,
    {
      method: 'POST',
      body: formData,
    }
  )
    .then((response) => {
      if (response.ok) {
        closeUploadPhotoWindow();
        openUploadSuccess();
        cleanForm();
      } else {
        openUploadError();
      }
    })
    .catch(openUploadError);
});

function cleanForm() {
  form.reset();
  cleanEffect();
  cleanScale();
}

function openUploadPhotoWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  registerEscAndButtonListeners(() => {
    closeUploadPhotoWindow();
    cleanForm();
  }, cancelButton);
}

function closeUploadPhotoWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
}

uploadButton.addEventListener('change', openUploadPhotoWindow);

export {
  openUploadPhotoWindow,
  closeUploadPhotoWindow
};
