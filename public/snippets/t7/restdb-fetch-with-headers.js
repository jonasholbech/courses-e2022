fetch("someurl", {
  method: "get",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "your-cors-api-key",
    "cache-control": "no-cache"
  }
})
  .then(e => e.json())
  .then(e => console.log(e));
