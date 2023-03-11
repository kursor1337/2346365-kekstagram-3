function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength
}

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
    )
  }
  return photos
}

generatePhotosArray()
