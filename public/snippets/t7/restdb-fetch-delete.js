fetch("someurl/SOME_ID", {
    method: "delete",
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-apikey': "your-cors-api-key",
      "cache-control": "no-cache"
    }
})
  .then(res=>res.json())
  .then(data=>console.log(data));