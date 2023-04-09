import { isEscKey } from './util.js';
import { validateForm } from './validator.js';
import {
  openUploadSuccess,
  closeUploadSuccess,
  openUploadError,
  closeUploadError
} from './network-message-controller.js';

const BACKEND_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const uploadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const commentInput = document.querySelector('.text__description');
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
      } else {
        openUploadError();
      }
    })
    .catch(openUploadError);
});

function cleanForm() {
  uploadButton.value = '';
  commentInput.value = '';
}

function onFormEscapeKeyDown(evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeUploadPhotoWindow();
    closeUploadError();
    closeUploadSuccess();
  }
}

function openUploadPhotoWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscapeKeyDown);
}

function closeUploadPhotoWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  cleanForm();
}

uploadButton.addEventListener('change', openUploadPhotoWindow);

cancelButton.addEventListener('click', closeUploadPhotoWindow);
