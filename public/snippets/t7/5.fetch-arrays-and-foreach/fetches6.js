fetch("https://somesite.com/api/...")
  .then((e) => e.json())
  .then(buildIt);

function buildIt(data) {
  console.log(data);
}
