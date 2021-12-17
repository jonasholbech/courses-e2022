// the known
fetch("stuff")
  .then(res => res.json())
  .then(data => {
    //do stuff
  });

//is it ok?
fetch("stuff")
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      //ARGH
      console.log("arghh");
    }
  })
  .then(data => {
    //do stuff
    console.log("hi mom");
  });

//but the final then still runs :-(
fetch("stuff")
  .then(res => {
    if (res.ok) {
      return res;
    } else {
      //ARGH
      throw Error("ARGHHHHHHHH something went wrong");
      console.log("arghh");
    }
  })
  .then(data => {
    //do stuff
    console.log("hi mom");
  })
  .catch(e => {
    console.dir(e);
  });

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}
fetch("https://t7.kea-alt-del.dk/wp-json/wp/v2/book?_embed")
  .then(handleErrors)
  .then(response => console.log(response))
  .catch(error => console.log(error));
