let data = {
    name: "Jonas2",
    email: "jofh@kea.dk",
    age: 18
};
let postData = JSON.stringify(data);

fetch("someurl/SOME_ID", {
    method: "put",
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-apikey': "your-cors-api-key",
        "cache-control": "no-cache"
    },
    body: postData
}).then(d => d.json()).then(t => console.log(t));