import { registerEscDocumentButtonListeners } from './util.js';
import { openUploadPhotoWindow, closeUploadPhotoWindow } from './form-controller.js';

const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');
const successButton = successMessageElement.querySelector('.success__button');
const errorButton = errorMessageElement.querySelector('.error__button');

document.body.appendChild(successMessageElement);
document.body.appendChild(errorMessageElement);
successMessageElement.classList.add('hidden');
errorMessageElement.classList.add('hidden');

// let currentSuccessMessageElement = successMessageElement.cloneNode(true);

function closeUploadSuccess() {
  successMessageElement.classList.add('hidden');
}

function openUploadSuccess(){
  registerEscDocumentButtonListeners(closeUploadSuccess, successButton);
  successMessageElement.classList.remove('hidden');
}

function closeUploadError() {
  errorMessageElement.classList.add('hidden');
  openUploadPhotoWindow();
}

function openUploadError(){
  errorMessageElement.classList.remove('hidden');
  registerEscDocumentButtonListeners(closeUploadError, errorButton);
  closeUploadPhotoWindow();
}

export {
  openUploadSuccess,
  closeUploadSuccess,
  openUploadError,
  closeUploadError
};
