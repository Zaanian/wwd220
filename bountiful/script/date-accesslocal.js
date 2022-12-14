
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const monthnames = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

const localtime = (window.localStorage.setItem("date-time", new Date()));
const data = new Date();
const day = daynames[data.getDay()];
const month = monthnames[data.getMonth()];
const year = data.getFullYear();

const day2 = daynames[data.getDay() + 1];
const day3 = daynames[data.getDay() + 2];


document.querySelector("#date").innerHTML = `<strong>${day}, ${month} ${data.getDate()}, ${year}</strong>`;
document.querySelector("#date-second").innerHTML = `<strong>${day2}, ${month} ${data.getDate() + 1}, ${year}</strong>`;
document.querySelector("#date-third").innerHTML = `<strong>${day}, ${month} ${data.getDate() + 2}, ${year}</strong>`;
console.log(localStorage);
//-------------------
//Get number of drinks ordered

const numberOrdered = Number(window.localStorage.getItem("numbtn"))
let numberButn = document.querySelector(".number")
numberButn.textContent = `Total number of drinks ordered: ${numberOrdered}`

