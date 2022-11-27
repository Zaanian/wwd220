const requestURL = "./json/data.json"
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const business = jsonObject['business'];
        const randomIndexList = getRandomNums(business);

        console.log(randomIndexList);
        randomIndexList.forEach(displayBusiness);
    });

  function getRandomNums(businesslist) {
    const remixList = businesslist.sort(() => 0.5 - Math.random());
    return remixList.slice(0, 3);
}

  function displayBusiness(business) {
    
    let card = document.createElement('div');
    let logo = document.createElement('img');
    let h2 = document.createElement('h2');
    let address = document.createElement('span');
    let phone = document.createElement('span');
    let membershipLevel = document.createElement('span');
    let website = document.createElement('a');

    
    h2.textContent = `${business.name} `;
    address.textContent = `${business.address}`
    website.textContent = `${business.website}`
    phone.textContent = `${business.phonenumber}`
    membershipLevel.textContent = `${business.membership}`

    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `${business.name} logo`);
    logo.setAttribute('loading', 'lazy');

    website.setAttribute("href", business.website);
    website.setAttribute("target", "_blank");

    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(membershipLevel)
    card.appendChild(website)

   
    document.querySelector('div.cards').appendChild(card);
  }