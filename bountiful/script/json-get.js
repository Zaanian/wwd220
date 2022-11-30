
const requestURL = "./json/data.json"
const cards = document.querySelector(".cards");

fetch(requestURL).then(function (response) {
    return response.json();
}).then(function(jsonObject) {
    console.table(jsonObject);  
    const fruit = jsonObject['fruit'];
    fruit.forEach(displayFruit);
  });

function displayFruit(fruit) {
    
}