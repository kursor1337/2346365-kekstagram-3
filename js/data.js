import { getRandomPositiveInteger } from "./util.js"

function generatePhotosArray() {
  const photos = [];
  for (let i = 0; i < 25; i++) {
    photos.push(
      {
        id: i,
        url: "photos/${i}.jpg",
        description: "",
        likes: getRandomPositiveInteger(15, 200),
        comments: getRandomPositiveInteger(0, 200)
      }
    );
  }
  return photos;
}

export {
  generatePhotosArray
}
