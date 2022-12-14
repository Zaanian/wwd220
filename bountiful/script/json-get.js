
const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json"

fetch(requestURL).then(function (response) {
    return response.json();
}).then(function(jsonObject) {
    console.table(jsonObject);  
    const fruit = jsonObject 
    let arrayCount = 0
while (arrayCount <= 38) {
  displaySelection(fruit, arrayCount);
  arrayCount++;
}
  });

  //function
  function displaySelection(data, Count) {
    let tesing = document.createElement("option")

    tesing.setAttribute("name", data[Count].name)
    tesing.textContent = `${data[Count].name}`

    document.querySelector("#torque").append(tesing)
    document.querySelector("#work").append(tesing)
    document.querySelector("#play").append(tesing)
  }
