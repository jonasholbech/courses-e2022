function setTitle(title) {
  document.body.title = title;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function getRandBetween1and10() {
  return Math.floor(Math.random() * 10) + 1;
}
