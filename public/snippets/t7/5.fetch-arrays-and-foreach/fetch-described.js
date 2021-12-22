fetch("https://somesite.com/api/...")
  .then(function (initialResponse) {
    //could also be .text();
    return initialResponse.json();
  })
  .then(function (data) {
    buildIt(data);
  });
function buildIt(data) {
  //Ready to go
  //clone the template add data from JSON
}
