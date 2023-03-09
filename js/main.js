
function randomNumber(from, to) {
  if (from >= to || from < 0) throw "IllegalArgumentException";
  return Math.random() * (to - from) + from
}

function checkStringForLength(string, maxLength) {
  return string.length <= maxLength
}
