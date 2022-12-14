
fetch(requestURL).then(function (response) {
    return response.json();
}).then(function(jsonObject) {
    console.table(jsonObject);  
    const fruit = jsonObject 
    let currentnumber = localStorage.setItem("numbtn", 0)
    const orderButton = document.getElementById("orderbtn")
    const clearButton = document.getElementById("clearbtn")
    const selectfruitOne = document.getElementById("fruit-one")
    const selectfruitTwo = document.getElementById("fruit-two")
    const selectfruiTthree = document.getElementById("fruit-three")
    
orderButton.onclick = (e) =>
{
    e.preventDefault();
    const selectValuesone = [].filter.call(selectfruitOne.options, option => option.selected).map (option => option.index-1);
    const selectValuestwo = [].filter.call(selectfruitTwo.options, option => option.selected).map (option => option.index-1);
    const selectValuesthree = [].filter.call(selectfruiTthree.options, option => option.selected).map (option => option.index-1);

    if (selectValuesone == -1) {
        alert("please choose a fruit")
        let fur = 0
    } else {
        let fur = 1
        currentnumber = Number(window.localStorage.getItem("numbtn"))
        let adding = currentnumber+1;
        localStorage.setItem("numbtn", adding);
        calculateNutrition(fruit, selectValuesone, fur)
    }

    if (selectValuestwo == -1) {
        let furTwo = 0
    } else {
        let furTwo = 2
        calculateNutrition(fruit, selectValuestwo, furTwo)
    }

    if (selectValuesthree == -1) {
        let furThree = 0
    } else {
        let furThree = 3
        calculateNutrition(fruit, selectValuesthree, furThree)
    }

    console.log(localStorage)
}

clearButton.addEventListener("click", () => {
    const display = document.querySelector(".frooty-fruit")
    console.log(display)
    display.remove()
});
});


//functions

function displayOrder(data, index) {

}

function calculateNutrition(data, index, section) {
    let card = document.createElement("section")
    let name = document.createElement("p");
    let carbs = document.createElement("p")
    let sugar = document.createElement("p")
    let protein = document.createElement("p")
    let fat = document.createElement("p")
    let calories = document.createElement("p")

    name.textContent = `${data[index].name}`;
    carbs.textContent = `Carbohydrates ${data[index].nutritions.carbohydrates}`;
    sugar.textContent = `Sugar ${data[index].nutritions.sugar}`;
    protein.textContent = `Protein ${data[index].nutritions.protein}`;
    fat.textContent = `Fat ${data[index].nutritions.fat}`;
    calories.textContent = `Calories ${data[index].nutritions.calories}`;

    card.appendChild(name);
    card.appendChild(carbs);
    card.appendChild(sugar);
    card.appendChild(protein);
    card.appendChild(fat);
    card.appendChild(calories);

    if (section == 0) {
        gin = 0
    } else if (section == 1){
        card.setAttribute("class", "border")
        document.querySelector("#orderinfo-one").append(card);
    } else if (section == 2){
        card.setAttribute("class", "border")
        document.querySelector("#orderinfo-two").append(card);
    } else if (section == 3){
        card.setAttribute("class", "border")
        document.querySelector("#orderinfo-three").append(card);
    }
}

console.log(localStorage)