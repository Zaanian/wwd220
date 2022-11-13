const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthprophet = document.createElement('h3');
    let deathprophet = document.createElement('h3');
    let prophetBirthPlace = document.createElement('h3')
    let portrait = document.createElement('img');
    
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname} `;

    // 
    birthprophet.textContent = `Birth Date: ${prophet.birthdate}`;
    deathprophet.textContent = `Death Date: ${prophet.death}`;
    prophetBirthPlace.textContent = `Birthplace: ${prophet.birthplace}`

    let order = 0
    if (prophet.order === 1) {
        order = `The ${prophet.order}st Latter-day President`
    } else if (prophet.order === 2) {
        order = `The ${prophet.order}nd Latter-day President`
    } else if (prophet.order === 3) {
        order = `The ${prophet.order}rd Latter-day President`
    } else {
        order = `The ${prophet.order}th Latter-day President`
    }
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${order} `);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with an element
    card.appendChild(h2);
    card.appendChild(birthprophet);
    card.appendChild(deathprophet);
    card.appendChild(prophetBirthPlace)
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  