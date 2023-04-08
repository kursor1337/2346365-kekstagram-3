const zoomInButton = document.querySelector('.scale__control--bigger');
const zoomOutButton = document.querySelector('.scale__control--smaller');
const scaleValueField = document.querySelector('.scale__control--value');
const imageView = document.querySelector('.img-upload__preview');

const SCALE_MAX = 100;
const SCALE_MIN = 25;

zoomInButton.addEventListener('click', () => {
  changeImageScale(25);
});

zoomOutButton.addEventListener('click', () => {
  changeImageScale(-25);
});

function changeImageScale(step) {
  const currentScale = Number(scaleValueField.value);
  const newScale = currentScale + step;
  if (newScale >= SCALE_MIN && newScale <= SCALE_MAX) {
    scaleValueField.value = `${newScale}%`;
    imageView.style.scale = newScale / 100;
  }
}

