const data = {
  name: "Jonas",
  email: "jofh@kea.dk",
  age: 40
};

const postData = JSON.stringify(data);
fetch("someurl", {
  method: "post",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "your-cors-api-key",
    "cache-control": "no-cache"
  },
  body: postData
})
  .then(res => res.json())
  .then(data => console.log(data));
