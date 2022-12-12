
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
const data = new Date()
const day = daynames[data.getDay()];
const month = monthnames[data.getMonth()];
const year = data.getFullYear();

document.querySelector("#test").textContent = `${day} ${month} ${data.getDate()} ${year}`


console.log(localStorage);

