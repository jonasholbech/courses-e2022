fetch("SOME-API-ENDPOINT")
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    //We have the data
    console.log(data);
  })
  .catch(e => {
    //Woops, something went wrong
    console.error("An error occured:", e.message);
  });
