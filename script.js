let url = 'https://api.sheety.co/2360d9d43907ee174c29980e403b34fa/foodData/foglio1';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.foglio1);
});
