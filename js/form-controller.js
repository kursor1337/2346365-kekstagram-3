import { isEscKey } from './util.js';

const uploadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const commentInput = document.querySelector('.text__description');

function cleanForm() {
  uploadButton.value = '';
  commentInput.value = '';
}

function onFormEscapeKeyDown(evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeUploadPhotoWindow();
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

//added opening function on downloadButton
uploadButton.addEventListener('change', () => {
  openUploadPhotoWindow();
});

//added closing function on cancelButton
cancelButton.addEventListener('click', () => {
  closeUploadPhotoWindow();
});
