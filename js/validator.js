import { checkStringLength } from './util.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(
  form.querySelector('.text__description'),
  validateComments,
  'От 20 до 140 символов'
);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

function validateComments(value) {
  return !checkStringLength(value, 19) && checkStringLength(value, 140);
}
