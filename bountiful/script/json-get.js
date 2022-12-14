
const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json"

fetch(requestURL).then(function (response) {
    return response.json();
}).then(function(jsonObject) {
    console.table(jsonObject);  
    const fruit = jsonObject 
    let arrayCount = 0
    displayUnselected()
while (arrayCount <= 38) {
  displaySelection(fruit, arrayCount);
  arrayCount++;
}


  });

  //function
  function displayUnselected() {
    let nonselect1 = document.createElement("option");
    let nonselect2 = document.createElement("option");
    let nonselect3 = document.createElement("option");

    nonselect1.setAttribute("name", "none")
    nonselect1.textContent = `None*`

    nonselect2.setAttribute("name", "none")
    nonselect2.textContent = `None`

    nonselect3.setAttribute("name", "none")
    nonselect3.textContent = `None`

    document.querySelector("#torque").append(nonselect1);
    document.querySelector("#work").append(nonselect2);
    document.querySelector("#play").append(nonselect3);



  }

  function displaySelection(data, Count) {
    let firstFruit = document.createElement("option");
    let secondFruit = document.createElement("option");
    let thirdFruit = document.createElement("option");

    firstFruit.setAttribute("name", data[Count].name);
    firstFruit.textContent = `${data[Count].name}`;

    secondFruit.setAttribute("name", data[Count].name);
    secondFruit.textContent = `${data[Count].name}`;

    thirdFruit.setAttribute("name", data[Count].name);
    thirdFruit.textContent = `${data[Count].name}`;

    document.querySelector("#torque").append(firstFruit);
    document.querySelector("#work").append(secondFruit);
    document.querySelector("#play").append(thirdFruit);
  }
