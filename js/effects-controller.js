const effectsItemList = document.querySelector('.effects__list');
const imgElement = document.querySelector('.img-upload__preview');
const sliderBarField = document.querySelector('.effect-level');

const Effects = {
  Original: 'none',
  Chrome: 'chrome',
  Sepia: 'sepia',
  Marvin: 'marvin',
  Phobos: 'phobos',
  Heat: 'heat'
};

let currentEffect = Effects.Original;
let previousEffect = null;

sliderBarField.hidden = true;

effectsItemList.addEventListener('change', (evt) => {
  changeEffect(evt.target.value);
});

function changeEffect(effect) {
  currentEffect = effect;
  if (currentEffect === previousEffect) {
    return;
  }
  if (previousEffect !== null) {
    imgElement.classList.remove(`effects__preview--${previousEffect}`);
  }
  imgElement.classList.add(`effects__preview--${currentEffect}`);
  previousEffect = currentEffect;
}

function cleanEffect() {
  changeEffect(Effects.Original);
}

export {
  cleanEffect
};
