const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');
const successButton = successMessageElement.querySelector('.success__button');
const errorButton = errorMessageElement.querySelector('.error__button');

function closeUploadSuccess() {
  successMessageElement.classList.add('hidden');
  document.removeEventListener('click', closeUploadSuccess);
}

function openUploadSuccess(){
  document.addEventListener('click', closeUploadSuccess);
  successButton.addEventListener('click', () => {
    closeUploadSuccess();
  });
  document.body.append(successMessageElement);
}

function closeUploadError() {
  errorMessageElement.classList.add('hidden');
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function openUploadError(){
  errorButton.addEventListener('click', () => {
    closeUploadError();
  });
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.body.append(errorMessageElement);
}

export {
  openUploadSuccess,
  closeUploadSuccess,
  openUploadError,
  closeUploadError
};
