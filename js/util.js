function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

function isEscKey(evt) {
  return evt.key === 'Escape';
}

let currentEscListener = null;
let currentDocumentListener = null;
let currentButton = null;
let currentButtonListener = null;

function registerEscListener(onEscClicked) {
  unregisterListeners();
  const listener = (evt) => {
    if (isEscKey(evt)) {
      evt.preventDefault();
      onEscClicked();
      document.removeEventListener('keydown', listener);
    }
  };
  currentEscListener = listener;
  document.addEventListener('keydown', listener);
}

function registerOnDocumentClickListener(onDocumentClicked) {
  unregisterListeners();
  const listener = () => {
    onDocumentClicked();
    document.removeEventListener('click', listener);
  };
  currentDocumentListener = listener;
  document.addEventListener('click', listener);
}

function registerOnButtonClickListener(button, onButtonClick) {
  unregisterListeners();
  const listener = () => {
    onButtonClick();
    button.removeEventListener('click', listener);
  };
  currentButtonListener = listener;
  currentButton = button;
  button.addEventListener('click', listener);
}

function registerEscDocumentButtonListeners(listener, button) {
  unregisterListeners();
  function onButtonClicked() {
    listener();
    document.removeEventListener('keydown', onEscClicked);
    document.removeEventListener('click', onDocumentClicked);
    button.removeEventListener('click', onButtonClicked);
  }
  function onDocumentClicked() {
    listener();
    document.removeEventListener('keydown', onEscClicked);
    document.removeEventListener('click', onDocumentClicked);
    button.removeEventListener('click', onButtonClicked);
  }
  function onEscClicked(evt) {
    if (isEscKey(evt)) {
      evt.preventDefault();
      listener();
      document.removeEventListener('keydown', onEscClicked);
      document.removeEventListener('click', onDocumentClicked);
      button.removeEventListener('click', onButtonClicked);
    }
  }
  currentButton = button;
  currentButtonListener = onButtonClicked;
  currentDocumentListener = onDocumentClicked;
  currentEscListener = onEscClicked;
  document.addEventListener('keydown', onEscClicked);
  document.addEventListener('click', onDocumentClicked);
  button.addEventListener('click', onButtonClicked);
}

function registerEscAndButtonListeners(listener, button) {
  unregisterListeners();
  function onButtonClicked() {
    listener();
    document.removeEventListener('keydown', onEscClicked);
    button.removeEventListener('click', onButtonClicked);
  }
  function onEscClicked(evt) {
    if (isEscKey(evt)) {
      evt.preventDefault();
      listener();
      document.removeEventListener('keydown', onEscClicked);
      button.removeEventListener('click', onButtonClicked);
    }
  }
  currentButton = button;
  currentButtonListener = onButtonClicked;
  currentEscListener = onEscClicked;
  document.addEventListener('keydown', onEscClicked);
  button.addEventListener('click', onButtonClicked);
}

function unregisterListeners() {
  if (currentEscListener) {
    document.removeEventListener('keydown', currentEscListener);
  }
  if (currentDocumentListener) {
    document.removeEventListener('click', currentDocumentListener);
  }
  if (currentButton && currentButtonListener) {
    currentButton.removeEventListener('click', currentButtonListener);
  }
  currentButton = null;
  currentButtonListener = null;
  currentDocumentListener = null;
  currentEscListener = null;
}

export {
  getRandomPositiveInteger,
  checkStringLength,
  isEscKey,
  registerEscListener,
  registerOnDocumentClickListener,
  registerOnButtonClickListener,
  registerEscDocumentButtonListeners,
  registerEscAndButtonListeners,
  unregisterListeners
};
