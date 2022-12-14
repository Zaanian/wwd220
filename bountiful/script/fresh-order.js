fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const fruit = jsonObject;
    //let currentnumber = localStorage.setItem("numbtn", 0);
    const orderButton = document.getElementById("orderbtn");
    const clearButton = document.getElementById("clearbtn");

    const getNameInput = document.getElementById("first-name");
    const getEmailInput = document.getElementById("input-email");
    const getPhoneInput = document.getElementById("input-phone");

    const selectfruitOne = document.getElementById("fruit-one");
    const selectfruitTwo = document.getElementById("fruit-two");
    const selectfruiTthree = document.getElementById("fruit-three");

    orderButton.onclick = (e) => {
      e.preventDefault();
      const selectValuesone = [].filter
        .call(selectfruitOne.options, (option) => option.selected)
        .map((option) => option.index - 1);
      const selectValuestwo = [].filter
        .call(selectfruitTwo.options, (option) => option.selected)
        .map((option) => option.index - 1);
      const selectValuesthree = [].filter
        .call(selectfruiTthree.options, (option) => option.selected)
        .map((option) => option.index - 1);

      const selectName = getNameInput.value;
      const selectEmail = getEmailInput.value;
      const selectPhone = getPhoneInput.value;

      console.log(selectName);
      console.log(selectEmail);
      console.log(selectPhone);
      if (selectName === "") {
        alert("Please enter your name.")
    } else {
        if (selectEmail === "") {
            alert("Please enter your email.")
        } else {
            if (selectPhone === "") {
                alert("Please enter your phone number.")
            } else {
                if (selectValuesone, selectValuestwo, selectValuesthree == -1) {
                    alert("Please choose three fruits.");
                  } else {
                  console.log(fruit);
                  displayOrder(
                    fruit,selectValuesone,selectValuestwo,selectValuesthree,selectName,selectEmail,selectPhone);
                  let currentnumber = Number(window.localStorage.getItem("numbtn"));
                  let adding = currentnumber + 1;
                  localStorage.setItem("numbtn", adding);
                  console.log(localStorage);
                };
            }
        }
        
    };

    clearButton.addEventListener("click", () => {
      const display = document.querySelector(".frooty-fruit");
      console.log(display);
      display.remove();
      
    });
  }});

//functions
//Display order on page.
function displayOrder(data, index1, index2, index3, fname, emailg, cell) {
  let card = document.createElement("section");
  let name = document.createElement("div");
  let email = document.createElement("div");
  let phone = document.createElement("div");
  let displayFruit = document.createElement("span");
  let orderDate = document.createElement("div")

  let carbs = document.createElement("p");
  let sugar = document.createElement("p");
  let protein = document.createElement("p");
  let fat = document.createElement("p");
  let calories = document.createElement("p");
  
  displayFruit.textContent = `${data[index1].name}, ${data[index2].name}, ${data[index3].name}`;

  const totalcarbs = calculateCarbs(data, index1, index2, index3);
  const totalsugar = calculateSugar(data, index1, index2, index3);
  const totalprotein = calculateProtein(data, index1, index2, index3);
  const totalfat = calculateFat(data, index1, index2, index3);
  const totalcalories = calculateCalories(data, index1, index2, index3);

    let theDate = window.localStorage.getItem("date-time");

  name.textContent = fname;
  email.textContent = emailg;
  phone.textContent = cell;
  orderDate.textContent =  `Order Date: ${theDate.substring(0,16)}`;

  carbs.textContent = `Total Carbohydrates: ${totalcarbs}`;
  sugar.textContent = `Total Sugar: ${totalsugar}`;
  protein.textContent = `Total Protein: ${totalprotein}`;
  fat.textContent = `Total Fat: ${totalfat}`;
  calories.textContent = `Total Calories: ${totalcalories}`;

  card.appendChild(orderDate);
  card.appendChild(displayFruit);
  card.appendChild(carbs);
  card.appendChild(sugar);
  card.appendChild(protein);
  card.appendChild(fat);
  card.appendChild(calories);

  document.querySelector("#orderinfo-one").appendChild(card);
}

function calculateCarbs(data, index1, index2, index3) {
  let carbs1 = Number(data[index1].nutritions.carbohydrates);
  let carbs2 = Number(data[index2].nutritions.carbohydrates);
  let carbs3 = Number(data[index3].nutritions.carbohydrates);

  let totalcarbs = carbs1 + carbs2 + carbs3;
  return totalcarbs;
}

function calculateSugar(data, index1, index2, index3) {
  let sugar1 = Number(data[index1].nutritions.sugar);
  let sugar2 = Number(data[index2].nutritions.sugar);
  let sugar3 = Number(data[index3].nutritions.sugar);

  let totalsugar = sugar1 + sugar2 + sugar3;
  return totalsugar;
}

function calculateProtein(data, index1, index2, index3) {
  let protein1 = Number(data[index1].nutritions.protein);
  let protein2 = Number(data[index2].nutritions.protein);
  let protein3 = Number(data[index3].nutritions.protein);

  let totalprotein = protein1 + protein2 + protein3;
  return totalprotein;
}

function calculateFat(data, index1, index2, index3) {
  let fat1 = Number(data[index1].nutritions.fat);
  let fat2 = Number(data[index2].nutritions.fat);
  let fat3 = Number(data[index3].nutritions.fat);

  let totalfat = fat1 + fat2 + fat3;
  return totalfat;
}

function calculateCalories(data, index1, index2, index3) {
  let calories1 = Number(data[index1].nutritions.calories);
  let calories2 = Number(data[index2].nutritions.calories);
  let calories3 = Number(data[index3].nutritions.calories);

  let totalcalories = calories1 + calories2 + calories3;
  return totalcalories;
}

console.log(localStorage);
