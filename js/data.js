const BACKEND_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';

function getPhotos(onSuccess, onError) {
  console.log('ok 1');
  fetch(BACKEND_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
        console.log('ok 2');
      } else {
        onError();
      }
    })
    .then(onSuccess)
    .catch(onError);
}

export {
  getPhotos
};
