//JSON data
const request = 'chameber/json/data.json'
const cards = document.querySelector(".cards");


fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const data = jsonObject['business'];
    data.forEach(displaybusiness);
  });

  

