//JSON data
const cards = document.querySelector(".cards");

fetch("json/data.json").then(function (response) {
    return response.json();
}).then(function(jsonObject) {
    console.table(jsonObject);  
    const business = jsonObject['business'];
    business.forEach(displayProphets);
  });

  function displayProphets(business) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    
    h2.textContent = `${business.name} `;

    card.appendChild(h2);
   
    document.querySelector('div.cards').appendChild(card);
  }

  

