import { generatePhotosArray } from './data.js';

const photoTemplate = document.querySelector("#picture")
const photoList = document.querySelector(".pictures")

function drawPhoto() {
  const photos = generatePhotosArray();
  photos.forEach(({url, likes, comments}) => {
    const photoHolder = photoTemplate.cloneNode(true);
    photoHolder.querySelector('.picture__img').src = url;
    photoHolder.querySelector('.picture__likes').textContent = likes;
    photoHolder.querySelector('.picture__comments').textContent = comments.length;
    photoList.appendChild(photoHolder);
  });
  photoList.appendChild(photoList);
}

export {
  drawPhoto
}
